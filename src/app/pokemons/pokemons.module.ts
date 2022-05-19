import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { DetailsPokemonComponent } from './pages/details-pokemon/details-pokemon.component';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';
import { PokedexComponent } from './pages/pokedex/pokedex.component';
import { CardComponent } from './components/card/card.component';
import {HttpClientModule} from '@angular/common/http'
import { PokemonService } from './services/pokemon.service';


@NgModule({
  declarations: [
    DetailsPokemonComponent,
    PokemonsComponent,
    PokedexComponent,
    CardComponent,
    
  ],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    HttpClientModule,
    
  ],
  providers:[PokemonService]
})
export class PokemonsModule { }
