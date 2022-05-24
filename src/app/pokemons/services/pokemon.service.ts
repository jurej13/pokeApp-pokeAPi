import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../interfaces/pokemon.interface';
import { Pokemons } from '../interfaces/pokemons.interface';
import { LocationEncounter } from '../interfaces/location_encounter.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  // https://pokeapi.co/api/v2/pokemon?limit=10
  baseUrl : string = environment.url_Api
  constructor( private http : HttpClient) { }


  getPokemons(offset:number = 0) : Observable<Pokemons>{

    const url : string = this.baseUrl+`pokemon?offset=${offset}&limit=10`
    return this.http.get<Pokemons>(url)
  }
  getPokemon(query : string) : Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>(query)
  }
  getPokemonById(id : number) : Observable<Pokemon>{
    const url : string = this.baseUrl+`pokemon/${id}`    
    return this.http.get<Pokemon>(url)
  }
  getPokemonByName(name : string) : Observable<Pokemon>{
    const url : string = this.baseUrl+`pokemon/${name}`    
    return this.http.get<Pokemon>(url)
  }
  getLocation(query : string) : Observable<LocationEncounter[]>{
    return this.http.get<LocationEncounter[]>(query)
  }

}
