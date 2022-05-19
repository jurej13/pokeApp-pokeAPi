import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'pokemon',
    loadChildren:()=>import('./pokemons/pokemons.module').then(m=> m.PokemonsModule)
  },
  {path:'**',redirectTo:'pokemon'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
