import { Component, OnInit } from '@angular/core';
import { map, Observable, switchMap, tap } from 'rxjs';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { Pokemons } from '../../interfaces/pokemons.interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  pokemon !: Pokemon[]
  
  pokemons !:Pokemons
  constructor(private PokemonService : PokemonService) { }

  ngOnInit(): void {
    // this.PokemonService.getPokemons()
    //   .pipe(
    //     tap( _ => this.PokemonService.getPokemons()),
    //   )
    //   .subscribe(pokemon => {
    //     const pokArr :any = []
    //     pokemon.results.forEach(({url})=> {
    //       this.PokemonService.getPokemon(url).subscribe(resp=>{
    //         pokArr.push(resp)
    //         this.pokemon = pokArr
    //         console.log(this.pokemon)
    //       })
    //     })
    //   })
      // Lugar para romper
    this.PokemonService.getPokemons()
    .pipe(
      tap( _ => this.PokemonService.getPokemons()),
      map((pokemon) => {
        const pokArr : any = []
        pokemon.results.forEach(({url})=>{
          this.PokemonService.getPokemon(url).subscribe(resp=>{
            pokArr.push(resp)
            this.pokemon = pokArr
            
          })
        })
      })
    ).pipe(
      tap(_ =>console.log('tap', this.pokemon))
    )
  }
  

}
