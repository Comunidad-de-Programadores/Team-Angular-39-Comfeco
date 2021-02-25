import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

import { Observable, from, forkJoin } from 'rxjs';
import { finalize, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  

  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage
  ) { }

  
}
