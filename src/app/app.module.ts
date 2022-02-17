import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TopNavBarComponent } from 'src/app/navigation/topnavbar.component';
import { TopNavBar2Component } from 'src/app/navigation/topnavbar2.component';
import { FantasyNewsComponent } from './football21/fantasy-news/fantasynews.component';
import { Football21Component } from './football21/football21.component';
import { MyTeamComponent } from './my-team/myteam.component';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PlayersComponent } from './players/players.component';
import { DraftComponent } from './draft/draft.component';
import { LeagueComponent } from './league/league.component';
import { MatchupsComponent } from './matchups/matchups.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    TopNavBar2Component,
    FantasyNewsComponent,
    Football21Component,
    MyTeamComponent,
    PlayersComponent,
    DraftComponent,
    LeagueComponent,
    MatchupsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
