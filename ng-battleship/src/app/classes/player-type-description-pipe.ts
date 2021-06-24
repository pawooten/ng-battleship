import { Pipe, PipeTransform } from '@angular/core';
import { PlayerType } from './enumerations';

@Pipe({ name: 'playerTypeDescription'})
export class PlayerTypeDescriptionPipe implements PipeTransform {
  transform(playerType: PlayerType) : string {
    switch (playerType) {
      case PlayerType.PlayerOne: return 'player 1'; break;
      case PlayerType.PlayerTwo: return 'player 2'; break;
      case PlayerType.None:
      default:
          throw new Error(`Invalid PlayerType specified {playerType}`);
    }
  }
}
