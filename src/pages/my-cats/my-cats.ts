import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-my-cats',
  templateUrl: 'my-cats.html'
})
export class MyCatsPage {

  constructor(public navCtrl: NavController) {

  }

  goToSettings(){
    this.navCtrl.push('settings');
  }

}
