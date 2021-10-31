import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClientService } from "../http-client.service";

const host = 'https://dog.ceo'

@Injectable({ providedIn: 'root' })

export class DogRepository {
  constructor(private http: HttpClientService) { }

  getDogImage(): Observable<any> {
    return this.http.get(host, 'api/breeds/image/random')
  }
}
