import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typesPokemon'
})
export class TypesPokemonPipe implements PipeTransform {

  transform(value: unknown): unknown {
    switch (value) {
      case "grass":
        return 'green'
        
      case "poison":
        return '#76448A'
      case "normal":
        return '#A2A1A2'
      case "flying":
        return '#A65A47'
      case "fire":
        return 'red'
      case "water":
        return 'blue'
      case "bug":
        return '#97E891'
      case "ground":
        return '#CA9600'
      case "fairy":
        return '#FF73E3'
      case "dragon":
        return "#11D6F1"
      default:
        break;
    }
    return null;
  }

}
