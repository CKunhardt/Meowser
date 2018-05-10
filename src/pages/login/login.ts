import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import {
  FormBuilder,
  FormGroup,
  Validators } from '@angular/forms';

import { AuthProvider } from './../../providers/auth/auth';

import { TabsPage } from './../tabs/tabs';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'login'
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public form : FormGroup;

  constructor(
    public navCtrl: NavController,
    private _FB: FormBuilder,
    private _AUTH: AuthProvider
  ) {
    this.form = this._FB.group({
      'email' : ['', Validators.required],
      'password' : ['', Validators.required]
    });
  }

  logIn() : void {
    let email: any = this.form.controls['email'].value,
        password: any = this.form.controls['password'].value;

    this._AUTH.loginUser(email, password)
      .then(_ => {
        this.navCtrl.setRoot(TabsPage);
      }).catch(error => {
        console.log(error.message);
    });
  }

  goToSignup() : void {
    this.navCtrl.push('signup');
  }

}
