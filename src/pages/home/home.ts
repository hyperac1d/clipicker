import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SixthPage } from '../sixth/sixth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
  
  openSixthPage(){
  	this.navCtrl.push(SixthPage);
  }

  openLoginPage(){
  	this.navCtrl.push(LoginPage);
  }
  selector: 'page-home'


}
