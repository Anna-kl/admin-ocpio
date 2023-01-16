import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {ICategoryView} from "../DTO/Category/ICategoryView";
import {IRegistration} from "../DTO/Users/IRegistration";

@Injectable()

export class UserService {
  private url = environment.Uri + 'users/';

  constructor(private http: HttpClient) {
  }

  getRegister(token: string){
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + token);
    return this.http.get(this.url, {headers});
  }

  saveRegister(token: string, auth: IRegistration){
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + token);
    return this.http.post(`${this.url}save`, auth, {headers});
  }
}
