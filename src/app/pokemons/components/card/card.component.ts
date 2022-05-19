import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { tap } from 'rxjs';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { Pokemons } from '../../interfaces/pokemons.interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnChanges {
  @Input() pokemons !: Pokemons
  pokemon !: Pokemon[]
  pokemonArr : any = []
  constructor(private PokemonService : PokemonService) {}
  
  ngOnChanges(changes: SimpleChanges): void {
    this.pokemons.results.forEach(({url})=>{
      this.PokemonService.getPokemon(url).subscribe(resp=>{
        this.pokemonArr.push(resp)
        this.pokemon = this.pokemonArr
      })
      this.pokemonArr = []
    })  
  }

  
  

}
