import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  pokemon !: Pokemon
  constructor(private pokemonService : PokemonService) { }

  ngOnInit(): void {
  }
  search(name : string){
    this.pokemonService.getPokemonByName(name)
      .subscribe(resp => this.pokemon = resp)
  }

}
