import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPokemonComponent } from './pages/details-pokemon/details-pokemon.component';
import { PokedexComponent } from './pages/pokedex/pokedex.component';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';

const routes: Routes = [
  {path:'',component:PokemonsComponent},
  {path:'detalles',component:DetailsPokemonComponent},
  {path:'pokedex',component:PokedexComponent},
  {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonsRoutingModule { }
