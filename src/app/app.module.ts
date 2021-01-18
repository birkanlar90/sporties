import { MarkalaranaMainComponent } from './components/markalaranaMain/markalaranaMain.component';
import { MarkalarMainComponent } from './components/markalarMain/markalarMain.component';
import { UrunleranaMainController } from './components/urunleranaMain/urunleranaMain.component';
import { UrunlerMainComponent } from './components/urunlerMain/urunlerMain.component';
import { IletisimMainComponent } from './components/iletisimMain/iletisimMain.component';
import { HakkimizdaMainComponent } from './components/hakkimizdaMain/hakkimizdaMain.component';
import { LoginComponent } from './components/login/login.component';
import { environment } from './../environments/environment';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';




import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';



import { UyeloginComponent } from './components/uyelogin/uyelogin.component';
import { UyeregisterComponent } from './components/uyeregister/uyeregister.component';
import { AnasayfaMainComponent } from './components/anasayfaMain/anasayfaMain.component';
import { PanelMainComponent } from './components/panelMain/panelMain.component';




@NgModule({
  declarations: [
    AppComponent,
    PanelMainComponent,
    LoginComponent,
    UrunlerMainComponent,
    UrunleranaMainController,
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    IletisimMainComponent,
    HakkimizdaMainComponent,
    FooterComponent,
    MarkalarMainComponent,
    UyeloginComponent,
    UyeregisterComponent,
    AnasayfaMainComponent,
    MarkalaranaMainComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
