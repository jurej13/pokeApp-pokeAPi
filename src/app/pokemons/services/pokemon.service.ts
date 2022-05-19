import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../interfaces/pokemon.interface';
import { Pokemons } from '../interfaces/pokemons.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  // https://pokeapi.co/api/v2/pokemon?limit=10
  baseUrl : string = environment.url_Api
  constructor( private http : HttpClient) { }


  getPokemons() : Observable<Pokemons>{
    const url : string = this.baseUrl+`pokemon?offset=0&limit=10`
    return this.http.get<Pokemons>(url)
  }
  getPokemon(query : string) : Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>(query)
  }

}
