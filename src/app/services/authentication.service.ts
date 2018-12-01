import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public authf: AngularFireAuth) { }

  loginWithEmail(email: string, password: string) {
    return this.authf.auth.signInWithEmailAndPassword(email, password);
  }

  registerWithEmail(email: string, password: string) {
    return this.authf.auth.createUserWithEmailAndPassword(email, password);
  }

  getStatus(){
    return this.authf.authState;
  }

  logOut() {
    return this.authf.auth.signOut();
  }

  loginWithFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider()
    provider.setCustomParameters({
      'display': 'popup'
    })

    return this.authf.auth.signInWithPopup(provider)
  }	
}


