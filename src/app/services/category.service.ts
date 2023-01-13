import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {ICategoryView} from "../DTO/Category/ICategoryView";

@Injectable()

export class CategoryService {
  private url = environment.Uri + 'categories/';

  constructor(private http: HttpClient) {
  }

  getAllCategory(token: string): Observable<ICategoryView[]> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + token);
    return this.http.get<ICategoryView[]>(this.url, {headers});
  }

  saveCategory(send: ICategoryView, param: string){
    let headers: HttpHeaders = new HttpHeaders();
    return this.http.post<number>(`${this.url}${param}`, send, {headers});
  }
}
