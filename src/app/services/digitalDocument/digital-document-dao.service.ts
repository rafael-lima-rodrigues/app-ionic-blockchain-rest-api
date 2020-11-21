import { HttpClient } from "@angular/common/http";
import { AuthServiceService } from "../auth/auth-service.service";
import { env } from "../../environments/environments";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { DigitalDocument } from 'src/app/models/digital-document';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DigitalDocumentDaoService {

  private digitalDocuments: DigitalDocument[] = [];

  constructor(
    private http: HttpClient,
    private authService: AuthServiceService

  ) { }

  findAll(): Observable<DigitalDocument[]> {
    return this.http.get(env.url("api/doc/getAll")
    //, {
      //headers: {
       // Authorization: `Bearer ${this.authService.getUserToken}`
      //}
    //}
    ).pipe(
      map((json: any) => json),
    );
  }

  save(digitalDocument: DigitalDocument): Observable<DigitalDocument[]> {
    return this.http.post(env.url("api/doc/save"), digitalDocument).pipe(
      tap((data) => console.log(data)),
      map((json: any) => json.data),
      tap((data) => console.log(data)),
    );
  }

  delete(digitalDocument: DigitalDocument): Observable<DigitalDocument[]> { // POST (JWT)
    return this.http.delete(env.url(`api/doc/delete/${digitalDocument.id}`)).pipe(
      tap((data) => console.log(data)),
      map((json: any) => json),
      tap((data) => console.log(data)),
    );
  }
  update(digitalDocument: DigitalDocument):Observable<DigitalDocument>{
    console.log(JSON.stringify("updatin " +digitalDocument));
    return this.http.put(env.url(`api/doc/update/${digitalDocument.id}`), digitalDocument).pipe(
      tap((data) => console.log(data)),
      map((json: any) => json.data),
      tap((data) => console.log(data)),
    );
  }
  query(user: string): Observable<DigitalDocument[]> { // POST (JWT)
    return this.http.get(env.url(`api/doc/query/${user}`)).pipe(
      tap((data) => console.log(data)),
      map((json: any) => json),
      tap((data) => console.log(data)),
    );
  }
}
