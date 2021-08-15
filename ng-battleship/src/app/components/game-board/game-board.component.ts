import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GameStateService } from 'src/app/services/game-state-service';
import { GameBoard } from 'src/app/classes/game-board';
import { CellType, CellSize } from 'src/app/classes/enumerations';
import { UserPreferenceService } from 'src/app/services/user-preference-service';
import { PlayerType } from '../../classes/enumerations';
@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {

  cellType = CellType;
  cellSize = CellSize;

  private gameBoard: GameBoard;
  playerName$: Observable<string>;

  playerType$: Observable<PlayerType>;

  private gameBoardBehaviorSubject: BehaviorSubject<GameBoard>;
  gameBoard$: Observable<GameBoard>;

  cellSize$: Observable<CellSize>;

  constructor(private gameStateService: GameStateService, private userPreferenceService: UserPreferenceService) {

    this.gameBoard = new GameBoard();

    this.playerName$ = this.userPreferenceService.playerName$;

    this.playerType$ = this.gameStateService.playerType$;

    this.gameBoardBehaviorSubject = new BehaviorSubject<GameBoard>(this.gameBoard);
    this.gameBoard$ = this.gameBoardBehaviorSubject.asObservable();
    this.gameBoardBehaviorSubject.next(this.gameBoard);

    this.cellSize$ = this.userPreferenceService.cellSize$;
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
    return CellSize.None;
  }

  ngOnInit() {
  }

}
