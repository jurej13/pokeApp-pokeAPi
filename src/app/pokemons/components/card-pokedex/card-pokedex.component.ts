import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-card-pokedex',
  templateUrl: './card-pokedex.component.html',
  styleUrls: ['./card-pokedex.component.css']
})
export class CardPokedexComponent implements OnInit {
  @Input() pokemon !: Pokemon
  constructor() { }

  ngOnInit(): void {
  }

}
