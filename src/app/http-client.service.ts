import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  constructor(private http: HttpClient) { }

  private httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  }

  get(host: string, path: string, httpOptions: any = this.httpOptions): Observable<any> {
    return this.http.get<any>(`${host}/${path}`, httpOptions);
  }
}
