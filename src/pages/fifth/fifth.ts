import { Component } from '@angular/core';
import { IonicPage, AlertController, NavController, NavParams } from 'ionic-angular';
import { SixthPage } from '../sixth/sixth';

/**
 * Generated class for the FifthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fifth',
  templateUrl: 'fifth.html',
})
export class FifthPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FifthPage');
  }

  openSixthPage(){
  	this.navCtrl.push(SixthPage);
  }



}
