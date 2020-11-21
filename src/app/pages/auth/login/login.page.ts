import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  data: any = {
    username: '',
    password: ''
  };

  constructor(
    private router: Router,
    private authService: AuthServiceService
  ) { }

  doConfirmar(): void {
    console.log("login DATA"+this.data);

    this.authService.doLogin(this.data).subscribe((result) => {
      console.log("+=+=+"+result);
      this.router.navigate(['home']);
    });
  }

  doCreateAccount(): void {
    this.router.navigate(['new-account'])
  }

  doLimpar(): void {
    this.data = {};
  }
  ngOnInit() {
  }

}
