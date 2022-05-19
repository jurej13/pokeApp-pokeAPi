import { Component, OnInit} from '@angular/core';
import { Pokemons } from '../../interfaces/pokemons.interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  pokemons !: Pokemons
  offSet : number = 0 
  
  constructor(private pokemonService : PokemonService) { }
 

  ngOnInit(): void {
    this.pokemonService.getPokemons(this.offSet)
      .subscribe(resp => {
        this.pokemons = resp
        
      })
  }
  goBack(){
    if(this.offSet == 0) return;
    this.offSet -=10
    this.pokemonService.getPokemons(this.offSet)
      .subscribe(resp => {
        this.pokemons = resp
        
      })
  }
  goNext(){
    this.offSet+=10
    this.pokemonService.getPokemons(this.offSet)
      .subscribe(resp => {
        this.pokemons = resp
        
      })
  }

}
