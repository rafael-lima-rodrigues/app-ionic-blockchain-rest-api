import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router
  ) { }

  doTestar(): void {
	  console.log('Este é um teste de log');
  }

  doCriarDocument(): void {
    this.router.navigate(['digital-document-create']);
  }
  
  doListar(): void {
    const extras: NavigationExtras = {
      queryParams: {
        admin: true
      }
    };

    this.router.navigate(['digital-document-list'], extras);
  }

}
