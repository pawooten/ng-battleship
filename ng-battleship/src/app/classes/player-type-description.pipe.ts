import { Pipe, PipeTransform } from '@angular/core';
import { PlayerType } from './enumerations';

@Pipe({ name: 'playerTypeDescription'})
export class PlayerTypeDescriptionPipe implements PipeTransform {
  transform(playerType: PlayerType | null) : string {
    if (!playerType)
    {
      return 'none';
    }
    switch (playerType) {
      case PlayerType.PlayerOne: return 'player 1'; break;
      case PlayerType.PlayerTwo: return 'player 2'; break;
      default: // Note PlayerType.None case is handled by null check short circuit
          throw new Error(`Invalid PlayerType specified {playerType}`);
    }
  }
}
