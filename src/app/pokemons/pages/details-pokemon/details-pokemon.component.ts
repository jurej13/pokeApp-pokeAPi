import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-details-pokemon',
  templateUrl: './details-pokemon.component.html',
  styleUrls: ['./details-pokemon.component.css']
})
export class DetailsPokemonComponent implements OnInit {
  pokemon !:Pokemon
  constructor(private route : ActivatedRoute,private pokemonService : PokemonService) {}

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(({id})=>this.pokemonService.getPokemonById(id))
    ).subscribe(pokemon =>{this.pokemon = pokemon
      console.log(this.pokemon)
    })
    
  }

}
