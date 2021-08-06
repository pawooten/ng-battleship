import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatSliderModule } from '@angular/material/slider';

import { BehaviorSubject, Observable } from 'rxjs';

import { CellSize } from '../../classes/enumerations';
import { UserPreferencesPanelComponent } from './user-preferences-panel.component';
import { UserPreferenceService } from '../../services/user-preference-service';

describe('UserPreferencesPanelComponent', () => {
  let component: UserPreferencesPanelComponent;
  let fixture: ComponentFixture<UserPreferencesPanelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPreferencesPanelComponent ],
      imports: [ MatSliderModule],
      providers: [ { provide: UserPreferenceService, useClass: MockUserPreferenceService } ]
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

  it('should initialize cell size to small', done => {
    component.cellSize$.subscribe( cellSize => {
      expect(cellSize).toEqual(CellSize.Small);
      done();
    });
  });

  it('should return appropriate cellSize labels for recognized enumeration values', done => {
    const labelsByCellSize = [
      { key: CellSize.Small, value: "Small"},
      { key: CellSize.Medium, value: "Medium"},
      { key: CellSize.Large, value: "Large"},
      { key: CellSize.None, value: "None"}
    ];
    for (let cellSizeLabelPair of labelsByCellSize) {
      expect(component.getSliderThumbLabel(cellSizeLabelPair.key)).toEqual(cellSizeLabelPair.value);
    }
    done();
  });

  it('should return Unknown CellSize for unrecognized enumeration values', () => {
    const invalidEnumerationValues = [ -1, -1000, 1000];
    for (let invalidEnumerationValue of invalidEnumerationValues)
    {
      expect(component.getSliderThumbLabel(invalidEnumerationValue)).toEqual('Unknown CellSize');
    }
  });
});


class MockUserPreferenceService {

  private cellSizeBehaviorSubject: BehaviorSubject<CellSize>;
  cellSize$: Observable<CellSize>;

  constructor() {
    this.cellSizeBehaviorSubject = new BehaviorSubject<CellSize>(CellSize.None);
    this.cellSize$ = this.cellSizeBehaviorSubject.asObservable();
    this.cellSizeBehaviorSubject.next(CellSize.Small);
  }
}
