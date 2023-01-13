import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {AdminUser} from "../DTO/Users/adminUser";
import {IResponse} from "../DTO/Response/IResponse";


@Injectable()

export class AuthService {
  private url = environment.Uri + 'users/';

  constructor(private http: HttpClient) {
  }

  authUser(admin: AdminUser): Observable<IResponse>{
    let headers: HttpHeaders = new HttpHeaders();
    return this.http.post<IResponse>(this.url, admin, {headers});
  }
}
