import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GameStateService } from 'src/app/services/game-state-service';
import { GameBoard } from 'src/app/classes/game-board';
import { CellType, CellSize } from 'src/app/classes/enumerations';
@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {

  cellType = CellType;
  cellSize = CellSize;

  private gameBoard: GameBoard;
  private playerNameBehaviorSubject: BehaviorSubject<string>;
  playerName$: Observable<string>;

  private playerLabelBehaviorSubject: BehaviorSubject<string>;
  playerLabel$: Observable<string>;

  private gameBoardBehaviorSubject: BehaviorSubject<GameBoard>;
  gameBoard$: Observable<GameBoard>;

  private cellSizeBehaviorSubject: BehaviorSubject<CellSize>;
  cellSize$: Observable<CellSize>;

  constructor(private gameStateService: GameStateService) {

    this.gameBoard = new GameBoard();

    this.playerNameBehaviorSubject = new BehaviorSubject<string>('');
    this.playerName$ = this.playerNameBehaviorSubject.asObservable();
    this.playerNameBehaviorSubject.next(this.gameStateService.playerName);

    this.playerLabelBehaviorSubject = new BehaviorSubject<string>('');
    this.playerLabel$ = this.playerLabelBehaviorSubject.asObservable();
    this.playerLabelBehaviorSubject.next(this.gameStateService.playerLabel);

    this.gameBoardBehaviorSubject = new BehaviorSubject<GameBoard>(null);
    this.gameBoard$ = this.gameBoardBehaviorSubject.asObservable();
    this.gameBoardBehaviorSubject.next(this.gameBoard);

    this.cellSizeBehaviorSubject = new BehaviorSubject<CellSize>(CellSize.None);
    this.cellSize$ = this.cellSizeBehaviorSubject.asObservable();

    this.cellSizeBehaviorSubject.next(this.calculateCellSize(this.gameBoard.width));
  }

  private readonly cellSizesByGameBoardWidth = [ CellSize.Small, CellSize.Medium, CellSize.Large ];
  private calculateCellSize(gameBoardWidth: number): CellSize {
    // The smallest allowed game board is 6x6, and should be the largest cell size
    // The largest allowed game board is 16x16 and should be the smallest cell size
    // 6 - 9 = large, 10 - 12 = medium, 13 - 16 = small
    if (gameBoardWidth > 12) {
      return CellSize.Small;
    }
    if (gameBoardWidth > 9) {
      return CellSize.Medium;
    }
    if (gameBoardWidth > 6) {
      return CellSize.Large;
    }
  }

  ngOnInit() {
  }

}
