import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";
import { BehaviorSubject, Observable } from 'rxjs';

import { env } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";
import { ToastController } from "@ionic/angular";

const jwtHelper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  authRequest: any = this.clearAuthRequest();
  currentToken: BehaviorSubject<string> = new BehaviorSubject(null);

  constructor(
    private storage: Storage,
    private http: HttpClient,
    public toastController: ToastController,) { }


    async getUser(): Promise<string> {
      const result = await this.storage.get("auth-data");
      console.log('getUser', result.username)
      return result.username;
    }

  clearAuthRequest(): any {
    return {
      username: "",
      password: "",
      autenticated: false,
      token: "",
    };
  }
  private validateTokenExpiration(token: string): boolean {
    const jwtDecoded = jwtHelper.decodeToken(token);
    console.log(`JWT Decoded: ${JSON.stringify(jwtDecoded)}`);

    if (jwtHelper.isTokenExpired(token)) {
      return false;
    }

    return true;
  }

  hasLoggedUser(): Observable<boolean> {
    return Observable.create(async (observer: any) => {
      this.authRequest = await this.storage.get("auth-data") ||
        this.clearAuthRequest();

      if (
        this.authRequest?.token &&
        !this.validateTokenExpiration(this.authRequest?.token)
      ) {
        this.presentToast("Autenticacao expirada");
        await this.doLogout();
        return observer.next(false);
      }

      return observer.next(this.authRequest?.autenticated); // optional chain
    });
  }

  getUserToken(): Observable<string> {
    return Observable.create(async (observer: any) => {
      this.authRequest = await this.storage.get("auth-data") ||
        this.clearAuthRequest();

      if (
        this.authRequest?.token &&
        !this.validateTokenExpiration(this.authRequest?.token)
      ) {
        this.presentToast("Autenticacao expirada");
        await this.doLogout();
        return observer.error(new Error("Token expirado"));
      }

      return observer.next(this.authRequest?.token);
    });
  }

  getUserTokenSubject() {
    return this.currentToken.asObservable();
  }

  postLogin(data: any): Observable<any> {
    // return this.http.post(`${env.protocol}://${env.host}:${env.port}/login`, {
    return this.http.post(env.url("api/auth/signin"), {
      username: data.username,
      password: data.password,
    });
  }

  doLogin(data: any): Observable<boolean> {
    return Observable.create(async (observer: any) => {
      this.postLogin(data).subscribe(async (response) => {
        console.log('login sucesso');
        const token: string = `Bearer ${response["accessToken"]}`;
        await this.updateAuthRequest(data.username, data.password, true, token);
        return observer.next(this.authRequest?.autenticated);
      },
        async (error) => {
          console.log('login falho', JSON.stringify(error))
        },
        async () => {

        });
    });
  }

  async doLogout(): Promise<void> {
    await this.updateAuthRequest("", "", false, "");
  }

  async updateAuthRequest(
    username: string,
    password: string,
    autenticated: boolean,
    token: string): Promise<void> {
    this.authRequest.username = username;
    this.authRequest.password = password;
    this.authRequest.autenticated = autenticated;
    this.authRequest.token = token;

    if (this.authRequest.autenticated) {
      await this.storage.set("auth-data", this.authRequest);
    } else {
      await this.storage.remove("auth-data");
    }
    this.currentToken.next(this.authRequest?.token);
  }

  private async presentToast(message: any) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: "bottom",
    });
    toast.present();
  }
}
