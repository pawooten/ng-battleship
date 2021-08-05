import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameBoardComponent } from './game-board.component';
import { PlayerTypeDescriptionPipe } from '../../classes/player-type-description.pipe';
import { UserPreferencesPanelComponent } from '../user-preferences-panel/user-preferences-panel.component';
import { MatSliderModule } from '@angular/material/slider';

describe('GameBoardComponent', () => {
  let component: GameBoardComponent;
  let fixture: ComponentFixture<GameBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GameBoardComponent,
        PlayerTypeDescriptionPipe,
        UserPreferencesPanelComponent
      ],
      imports: [ MatSliderModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
