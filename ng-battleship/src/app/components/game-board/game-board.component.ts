import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GameStateService } from 'src/app/services/game-state-service';
import { GameBoard } from 'src/app/classes/game-board';
import { CellType } from 'src/app/classes/enumerations';
@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {

  cellType = CellType;

  private playerNameBehaviorSubject: BehaviorSubject<string>;
  playerName$: Observable<string>;

  private playerLabelBehaviorSubject: BehaviorSubject<string>;
  playerLabel$: Observable<string>;

  private gameBoardBehaviorSubject: BehaviorSubject<GameBoard>;
  gameBoard$: Observable<GameBoard>;

  constructor(private gameStateService: GameStateService) {
    this.playerNameBehaviorSubject = new BehaviorSubject<string>('');
    this.playerName$ = this.playerNameBehaviorSubject.asObservable();
    this.playerNameBehaviorSubject.next(this.gameStateService.playerName);

    this.playerLabelBehaviorSubject = new BehaviorSubject<string>('');
    this.playerLabel$ = this.playerLabelBehaviorSubject.asObservable();
    this.playerLabelBehaviorSubject.next(this.gameStateService.playerLabel);

    this.gameBoardBehaviorSubject = new BehaviorSubject<GameBoard>(null);
    this.gameBoard$ = this.gameBoardBehaviorSubject.asObservable();
    this.gameBoardBehaviorSubject.next(new GameBoard());
  }

  ngOnInit() {
  }

}
