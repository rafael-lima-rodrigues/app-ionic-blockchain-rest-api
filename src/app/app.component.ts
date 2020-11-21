import { Component } from '@angular/core';

import { MenuController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AuthServiceService } from './services/auth/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  navigate: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private menuCtrl: MenuController,
    private authRequest: AuthServiceService
  ) {
    this.sideMenu();
    console.log(this.navigate)
    this.initializeApp();
  }

  sideMenu() {
    this.navigate = [
      {
        title: "Home",
        url: "/home",
        icon: "home",
      },
      {
        title: "Novo Documento",
        url: "/digital-document-create",
        icon: "document-text-outline",
      },
      {
        title: "Listagem",
        url: "/digital-document-list",
        icon: "list-outline",
        
      },
      {
        title: "Meus Contratos",
        url: "/digital-document-user-list",
        icon: "list-outline",
      },
      
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async doSair(): Promise<void> {
    await this.authRequest.doLogout();

    this.menuCtrl.close();
    this.router.navigate(['login']);
  }
}
