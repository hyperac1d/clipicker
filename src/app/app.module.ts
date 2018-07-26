import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { FirstPage } from '../pages/first/first';
import { SecondPage } from '../pages/second/second';
import { ThirdPage } from '../pages/third/third';
import { FourthPage } from '../pages/fourth/fourth';
import { FifthPage } from '../pages/fifth/fifth';
import { SixthPage } from '../pages/sixth/sixth';
import { SeventhPage } from '../pages/seventh/seventh';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    FirstPage,
    SecondPage,
    ThirdPage,
    FourthPage,
    FifthPage,
    SixthPage,
    SeventhPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    FirstPage,
    SecondPage,
    ThirdPage,
    FourthPage,
    FifthPage,
    SixthPage,
    SeventhPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
