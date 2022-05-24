import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { DetailsPokemonComponent } from './pages/details-pokemon/details-pokemon.component';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';
import { PokedexComponent } from './pages/pokedex/pokedex.component';
import { CardComponent } from './components/card/card.component';
import {HttpClientModule} from '@angular/common/http'
import { PokemonService } from './services/pokemon.service';
import { TypesPokemonPipe } from './pipes/types-pokemon.pipe';
import { EvolutionComponent } from './pages/evolution/evolution.component';
import { CardPokedexComponent } from './components/card-pokedex/card-pokedex.component';


@NgModule({
  declarations: [
    DetailsPokemonComponent,
    PokemonsComponent,
    PokedexComponent,
    CardComponent,
    TypesPokemonPipe,
    EvolutionComponent,
    CardPokedexComponent,
    
  ],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    HttpClientModule,
    
  ],
  providers:[PokemonService]
})
export class PokemonsModule { }
