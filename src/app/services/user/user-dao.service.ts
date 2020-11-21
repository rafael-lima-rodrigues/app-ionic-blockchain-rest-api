import { HttpClient } from "@angular/common/http";
import { AuthServiceService } from "../auth/auth-service.service";
import { env } from "../../environments/environments";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { User } from 'src/app/models/user';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserDaoService {

  private users: User;

  constructor(private http: HttpClient) { }

  save(user: User): Observable<User>{
    return this.http.post(env.url("api/auth/signup"), user).pipe(
      tap((data) => console.log(data)),
      map((json: any) => json),
      tap((data) => console.log(data)),
    );

  }
}
