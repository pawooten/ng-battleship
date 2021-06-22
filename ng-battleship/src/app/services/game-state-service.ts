import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameStateService {
  get playerName(): string {
    return 'Mocked Player Name';
  }

  get playerLabel(): string {
    return 'Mocked Player One Label';
  }
}
