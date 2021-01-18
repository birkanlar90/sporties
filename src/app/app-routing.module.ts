import { MarkalaranaMainComponent } from './components/markalaranaMain/markalaranaMain.component';
import { UrunleranaMainController } from './components/urunleranaMain/urunleranaMain.component';
import { UrunlerMainComponent } from './components/urunlerMain/urunlerMain.component';
import { IletisimMainComponent } from './components/iletisimMain/iletisimMain.component';
import { HakkimizdaMainComponent } from './components/hakkimizdaMain/hakkimizdaMain.component';
import { LoginComponent } from './components/login/login.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';





import { UyeloginComponent } from './components/uyelogin/uyelogin.component';
import { UyeregisterComponent } from './components/uyeregister/uyeregister.component';
import { AnasayfaMainComponent } from './components/anasayfaMain/anasayfaMain.component';
import { PanelMainComponent } from './components/panelMain/panelMain.component';



const redirectLogin = () => redirectUnauthorizedTo(['/login']);
const routes: Routes = [

  {
    path: '',
    component:
      AnasayfaMainComponent,

  }
  ,
  { path: 'login', component: LoginComponent },
  { path: 'kayitlar', component: UrunlerMainComponent},
  { path: 'hakkimizda', component: HakkimizdaMainComponent },
  { path: 'iletisim', component: IletisimMainComponent },
  
  { path: 'urunler', component: UrunleranaMainController },
  { path: 'panel', component: PanelMainComponent, canActivate: [AngularFireAuthGuard],
  data: {
    authGuardPipe: redirectLogin
  }},
  { path: 'uyelogin', component: UyeloginComponent },
  { path: 'uyeregister', component: UyeregisterComponent },
  { path: 'markalar', component: MarkalaranaMainComponent },






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
