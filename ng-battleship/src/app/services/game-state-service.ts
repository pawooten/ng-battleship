import { Injectable } from '@angular/core';
import { PlayerType } from '../classes/enumerations';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameStateService {
  private playerTypeBehaviorSubject: BehaviorSubject<PlayerType>;
  playerType$: Observable<PlayerType>;

  constructor()
  {
    this.playerTypeBehaviorSubject = new BehaviorSubject<PlayerType>(PlayerType.None);
    this.playerType$ = this.playerTypeBehaviorSubject.asObservable();
    this.playerTypeBehaviorSubject.next(PlayerType.PlayerOne);
  }
}
