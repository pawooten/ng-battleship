import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { PlayerTypeDescriptionPipe } from './classes/player-type-description.pipe';
import { UserPreferencesPanelComponent } from './components/user-preferences-panel/user-preferences-panel.component';
import { MatSliderModule } from '@angular/material/slider';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatSliderModule
      ],
      declarations: [
        AppComponent,
        GameBoardComponent,
        PlayerTypeDescriptionPipe,
        UserPreferencesPanelComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ng-battleship'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ng-battleship');
  });

});
