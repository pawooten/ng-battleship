import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { CellSize } from '../classes/enumerations';

@Injectable({
  providedIn: 'root'
})
export class UserPreferenceService {
  private playerNameBehaviorSubject: BehaviorSubject<string>;
  playerName$: Observable<string>;

  private cellSizeBehaviorSubject: BehaviorSubject<CellSize>;
  cellSize$: Observable<CellSize>;

  constructor() {
    this.cellSizeBehaviorSubject = new BehaviorSubject<CellSize>(CellSize.None);
    this.cellSize$ = this.cellSizeBehaviorSubject.asObservable();
    this.cellSizeBehaviorSubject.next(CellSize.Medium);

    this.playerNameBehaviorSubject = new BehaviorSubject<string>('');
    this.playerName$ = this.playerNameBehaviorSubject.asObservable();
    this.playerNameBehaviorSubject.next('Paul');
  }
}
