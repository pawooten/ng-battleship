import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameBoardComponent } from './components/game-board/game-board.component';

import { PlayerTypeDescriptionPipe } from './classes/player-type-description-pipe';
@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    PlayerTypeDescriptionPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
