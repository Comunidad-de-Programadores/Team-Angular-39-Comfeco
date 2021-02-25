import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  activeProfileId;
  userId;

  /**
    * -contador de notificaciones
    *  countNotify
    * (implementacion a futuro)
    */
  countNotify: BehaviorSubject<number> = new BehaviorSubject<number>(0);
 

  url: string = "https://fcm.googleapis.com/fcm/send";

  constructor(private firestore: AngularFirestore,
    private router: Router,
    public http: HttpClient
  ) { }


   /**
    * send a Push Notifications
    *
    *token, title, body, image,link
    */

  sendData(userToken: string, title: string, body: string, image: string, link: string): Observable<any> {


    var Key = environment.key;
    var headers = new HttpHeaders().set('Authorization', Key);
    //let message: pushMessage = new pushMessage();
    // message.registration_ids = [userId];
    // message.collapse_key = 'type_a'
    let notify;
    if (!image) {
      notify = {
        body: body,
        title: title,
        sound: "default",
        icon: "url de icono",
        click_action: link

      }
    }
    else {
      notify = {
        body: body,
        title: title,
        sound: "default",
        icon: "url de icono",
        image: image,
        click_action: link
      }
    }

    const message = {
      registration_ids: [userToken],
      collapse_key: 'type_a',
      notification: notify
    }

    //message.notification = notify;
    //console.log(JSON.stringify(message));
    return this.http.post(this.url, message, { headers });

  }

  /**
   * Get de connection request
   *
   * 
   */
  


  /**
   * Get de Appintments request
   *
   *
   */
  loadAppointments(activeProfileId: string): Observable<any> {
    return this.firestore
      .collection('appointments', (ref) =>
        ref
          .where('profileId', '==', activeProfileId)
          .where('date', '>=', Date.now())
          .where('status', "in", ["Confirmed", "Pending"])
          .orderBy('date', 'asc')
      )
      .snapshotChanges()

  }

  /**
   * Add token
   *
   */
  addToken(id: string, valueToken: string) {
    this.firestore.doc(`users/${id}`).update({
      token: valueToken
    })
  }
  /**
  * Remove token
  *
  */
  removeToken(id: string) {
    this.firestore.doc(`users/${id}`).update({
      token: ''
    })
  }



  /**
  * Get token
  * in the future put on other service
  */
  getUserInfo(id: string): Observable<firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>> {
    //console.log('get token for ' + id);

    var getOptions: firebase.firestore.GetOptions = {
      source: 'default'
    };

    return this.firestore.doc(`users/${id}`).get(getOptions)
  }
}
