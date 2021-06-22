import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GameStateService } from 'src/app/services/game-state-service';
@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {

  private playerNameBehaviorSubject: BehaviorSubject<string>;
  playerName$: Observable<string>;

  private playerLabelBehaviorSubject: BehaviorSubject<string>;
  playerLabel$: Observable<string>;

  constructor(private gameStateService: GameStateService) {
    this.playerNameBehaviorSubject = new BehaviorSubject<string>('');
    this.playerName$ = this.playerNameBehaviorSubject.asObservable();
    this.playerNameBehaviorSubject.next(this.gameStateService.playerName);

    this.playerLabelBehaviorSubject = new BehaviorSubject<string>('');
    this.playerLabel$ = this.playerLabelBehaviorSubject.asObservable();
    this.playerLabelBehaviorSubject.next(this.gameStateService.playerLabel);
  }

  ngOnInit() {
  }

}
