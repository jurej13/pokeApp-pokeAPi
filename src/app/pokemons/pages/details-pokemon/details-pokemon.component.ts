import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {  switchMap } from 'rxjs/operators';
import { LocationEncounter } from '../../interfaces/location_encounter.interface';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-details-pokemon',
  templateUrl: './details-pokemon.component.html',
  styleUrls: ['./details-pokemon.component.css']
})
export class DetailsPokemonComponent implements OnInit {
  pokemon !:Pokemon
  location !:LocationEncounter[] 
  constructor(private route : ActivatedRoute,private pokemonService : PokemonService) {}
  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(({id})=>this.pokemonService.getPokemonById(id))
    ).subscribe(pokemon =>{
        this.pokemon = pokemon    
        this.pokemonService.getLocation(this.pokemon.location_area_encounters)
          .subscribe(resp=>{
            this.location = resp
            console.log(this.location)
          })      
    })
  }
}
