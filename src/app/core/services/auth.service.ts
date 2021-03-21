import { InsigniasUser, User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { RoleValidator } from '@auth/helpers/roleValidator';
import { Insignias } from '../models/insignias.model';

@Injectable({ providedIn: 'root' })
export class AuthService extends RoleValidator {
  public user$: Observable<User>;
  insignias: Insignias[];
  insignias$: Observable<Insignias[]>;
  user:User;


  constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore) {
    super();

    this.user$ = this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          this.user=user;

          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        }
        return of(null);
      })
    );


  }

  
async loginGoogle(): Promise<User> {
    try {
      const { user } = await this.afAuth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      );
      this.updateUserData(user);
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async resetPassword(email: string): Promise<void> {
    try {
      return this.afAuth.sendPasswordResetEmail(email);
    } catch (error) {
      console.log(error);
    }
  }

  async sendVerificationEmail(): Promise<void> {
    return (await this.afAuth.currentUser).sendEmailVerification();
  }

  async login(email: string, password: string): Promise<User> {
    try {
      const { user } = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );
      if (user) {
        this.updateUserData(user);
      }
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async register(dataUser): Promise<User> {

    const { user } = await this.afAuth.createUserWithEmailAndPassword(
      dataUser.email,
      dataUser.password
    );
    await this.sendVerificationEmail();
    if (user) {
      this.updateUserData(user, dataUser);
    }
    return user;

  }

  async logout(): Promise<void> {
    try {
      await this.afAuth.signOut();
    } catch (error) {
      console.log(error);
    }
  }


  public updateUserData(user: User, dataRegister = null) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${user.uid}`
    );


    let data: User = {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
      displayName: user.displayName,
      photoURL: user.photoURL,
      role: 'SUSCRIPTOR',
    };

    data = (dataRegister != null) ? Object.assign(data, dataRegister) : data;


    return userRef.set(data, { merge: true });
  }
}