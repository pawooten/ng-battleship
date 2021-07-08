import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameBoardComponent } from './components/game-board/game-board.component';

import { PlayerTypeDescriptionPipe } from './classes/player-type-description-pipe';
import { UserPreferencesPanelComponent } from './components/user-preferences-panel/user-preferences-panel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    PlayerTypeDescriptionPipe,
    UserPreferencesPanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
