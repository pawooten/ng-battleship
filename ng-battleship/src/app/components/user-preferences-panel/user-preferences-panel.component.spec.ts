import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatSliderModule } from '@angular/material/slider';

import { BehaviorSubject, Observable } from 'rxjs';

import { CellSize } from '../../classes/enumerations';
import { UserPreferencesPanelComponent } from './user-preferences-panel.component';
// import { UserPreferenceService } from '../../services/user-preference-service';

describe('UserPreferencesPanelComponent', () => {
  let component: UserPreferencesPanelComponent;
  let fixture: ComponentFixture<UserPreferencesPanelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPreferencesPanelComponent ],
      imports: [ MatSliderModule],
      // providers: [ { UserPreferenceService, MockUserPreferenceService } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPreferencesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize cell size to medium', done => {
    component.cellSize$.subscribe( cellSize => {
      expect(cellSize).toEqual(CellSize.Medium);
      done();
    });
  });
});

class MockUserPreferenceService {

  private playerNameBehaviorSubject: BehaviorSubject<string>;
  playerName$: Observable<string>;

  private cellSizeBehaviorSubject: BehaviorSubject<CellSize>;
  cellSize$: Observable<CellSize>;

  constructor() {
    this.cellSizeBehaviorSubject = new BehaviorSubject<CellSize>(CellSize.None);
    this.cellSize$ = this.cellSizeBehaviorSubject.asObservable();
    this.cellSizeBehaviorSubject.next(CellSize.Small);

    this.playerNameBehaviorSubject = new BehaviorSubject<string>('');
    this.playerName$ = this.playerNameBehaviorSubject.asObservable();
    this.playerNameBehaviorSubject.next('Caroline');
  }
}
