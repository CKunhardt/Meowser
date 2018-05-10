import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import firebase from 'firebase';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  public user : Observable<firebase.User>;

  constructor(public http: Http) {}

  loginUser(email: string, password: string) : Promise<void> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  signupUser(email: string, password: string, username: string) : Promise<void> {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCred : firebase.auth.UserCredential ) => {
        return firebase
          .database()
          .ref('/users')
          .child(userCred.user.uid)
          .set({
            username: username,
            email: email
          });
      });
  }

  logOut(): Promise<void> {
    return firebase.auth().signOut();
  }

}
