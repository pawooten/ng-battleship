import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CellSize } from '../../classes/enumerations';
import { UserPreferenceService } from 'src/app/services/user-preference-service';
@Component({
  selector: 'app-user-preferences-panel',
  templateUrl: './user-preferences-panel.component.html',
  styleUrls: ['./user-preferences-panel.component.css']
})
export class UserPreferencesPanelComponent implements OnInit {

  cellSize = CellSize;

  cellSize$: Observable<CellSize>;

  constructor(private userPreferenceService: UserPreferenceService) {
    this.cellSize$ = userPreferenceService.cellSize$;
  }

  onCellSizeChanged(event: any) {
    console.log(event);
  }

  getSliderThumbLabel(value: number) : string {
    // TODO build localization service to encapsulate this
    switch (value)
    {
      case CellSize.Small:
        return "Small";
        break;
      case CellSize.Medium:
        return "Medium";
        break;
      case CellSize.Large:
        return "Large";
        break;
      case CellSize.None:
        return "None";
        break;
      default:
        return "Unknown CellSize";
        break;
    }
  }

  ngOnInit() {
  }

}
