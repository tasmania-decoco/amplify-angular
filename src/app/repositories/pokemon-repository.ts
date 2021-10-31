import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClientService } from "../http-client.service";

const host = 'https://pokeapi.co'
const pathPrefix = 'api/v2'

@Injectable({ providedIn: 'root' })

export class PokemonRepository {
  constructor(private http: HttpClientService) { }

  getPokemonData(id: number): Observable<any> {
    return this.http.get(host, `${pathPrefix}/pokemon/${id}`)
  }
}
