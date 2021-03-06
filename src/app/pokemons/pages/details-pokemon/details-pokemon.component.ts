import {  Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  switchMap,delay } from 'rxjs/operators';
import { LocationEncounter } from '../../interfaces/location_encounter.interface';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { SpeciesPokemon } from '../../interfaces/species.interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-details-pokemon',
  templateUrl: './details-pokemon.component.html',
  styleUrls: ['./details-pokemon.component.css']
})
export class DetailsPokemonComponent implements OnInit {
  pokemon !:Pokemon
  pokemons !: Pokemon[]
  routeId !: any
  location !:LocationEncounter[] 
  evolutions !: string[]
  species !: SpeciesPokemon
  constructor(
    private route : ActivatedRoute,
    private pokemonService : PokemonService,
    private navRoute : Router) {
  }
  ngOnInit(): void {
    // this.route.params.pipe(
    //   switchMap(({id})=>this.pokemonService.getPokemonById(id))
    // ).subscribe(pokemon =>{
    //     this.pokemon = pokemon    
    //     this.pokemonService.getLocation(this.pokemon.location_area_encounters)
    //       .subscribe(resp=>{
    //         this.location = resp
    //         console.log(this.location)
    //       })      
    // })
    this.route.params.pipe(
      switchMap(({id}) => this.pokemonService.getPokemonById(id)),
      delay(3000)
    ).subscribe(
      pokemon=> this.pokemon = pokemon)
    // this.pokemonService.getPokemonById(this.routeId).subscribe(
    //   pokemon => this.pokemon = pokemon
    //   )   
    }

  seeEvolutions(){
    this.pokemonService.getPokemonSpecies(this.pokemon.id)
      .pipe(
        switchMap(({evolution_chain}) => this.pokemonService.getEvolutionChain(evolution_chain.url))
      ).subscribe(evolutions => {
        let arrTemp : any = []
        arrTemp.push(evolutions.chain.species.name)
        if(evolutions.chain.evolves_to != []){
          evolutions.chain.evolves_to.forEach(resp=>{
            arrTemp.push(resp.species.name)
            this.evolutions = arrTemp
            if(resp.evolves_to != []){
              resp.evolves_to.forEach(resp=> {
                arrTemp.push(resp.species.name)
                this.evolutions = arrTemp
                arrTemp = []
              })
            }else{
              arrTemp=[];
            }
          })
        }
        let pokArr : any = []
        this.evolutions.forEach(pokemon=>{
          this.pokemonService.getPokemonByName(pokemon).subscribe(
            datosPokemon =>{
              pokArr.push(datosPokemon)
              this.pokemons = pokArr
            }
          )
        }) 
      })
    
  }
  mostrar(evo : Pokemon){
        this.navRoute.navigate(['pokemon/detalles',evo.id])
  }
}
