import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPreferencesPanelComponent } from './user-preferences-panel.component';
import { MatSliderModule } from '@angular/material/slider';

describe('UserPreferencesPanelComponent', () => {
  let component: UserPreferencesPanelComponent;
  let fixture: ComponentFixture<UserPreferencesPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPreferencesPanelComponent ],
      imports: [ MatSliderModule]
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
});
