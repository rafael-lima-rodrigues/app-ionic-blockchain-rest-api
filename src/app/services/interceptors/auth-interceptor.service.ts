import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ToastController } from "@ionic/angular";
import { from, Observable, of, throwError } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { AuthServiceService } from "../auth/auth-service.service";

@Injectable({
  providedIn: "root",
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor(
    private authService: AuthServiceService,
    private router: Router,
    public toastController: ToastController,
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    console.log("AuthInterceptorService");

    return from(this.authService.getUserToken())
      .pipe(
        catchError((error) => of("")),
        switchMap((token) => {
          console.log("AuthInterceptorService.token = " + token);

          request = this.addToken(request, token);

          console.log("HttpRequest: ", request);

          return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
              console.log("AuthInterceptorService.map");

              if (event instanceof HttpResponse) {
                console.log("HttpResponse: ", event);
              }

              return event;
            }),
            catchError((error: HttpErrorResponse) => {
              console.log("AuthInterceptorService.catchError");

              if (error.status === 401) {
                console.log("HttpResponse: 401");
                this.presentToast("Falha na autenticação");
                this.router.navigate(["login"]);
              }

              return throwError(error);
            }),
          );
        }),
      );
  }
  private addToken(request: HttpRequest<any>, token: string) {
    if (token) {
      request = request.clone({
        setHeaders: {
          "Authorization": token,
          "Accept": "application/json",
        },
      });

      if (!request.headers.has("Content-Type")) {
        request = request.clone({
          setHeaders: {
            "Content-Type": "application/json",
          },
        });
      }
    }

    return request;
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

