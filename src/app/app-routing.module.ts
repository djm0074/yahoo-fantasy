import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyTeamComponent } from './my-team/myteam.component';
import { Football21Component } from './football21/football21.component';
import { PlayersComponent } from './players/players.component';
import { DraftComponent } from './draft/draft.component';
import { LeagueComponent } from './league/league.component';
import { MatchupsComponent } from './matchups/matchups.component';

const routes:Routes = [
  {path: '', component: Football21Component},
  {path: 'my-team', component: MyTeamComponent},
  {path: 'football21', component: Football21Component},
  {path: 'players', component: PlayersComponent},
  {path: 'draft', component: DraftComponent},
  {path: 'matchups', component: MatchupsComponent},
  {path: 'league', component: LeagueComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
