import { Component, OnInit } from "@angular/core";
import { PlayerRowComponent } from "../player-row.component";
import { PlayerRow } from "../player-row.model";
import { PlayersService } from "../players.service";

@Component({
    selector: 'app-players',
    templateUrl: 'players.component.html'
})

export class PlayersComponent implements OnInit {
    players: PlayerRow[] = [];
    
    constructor(private service:PlayersService) {

    }

    ngOnInit():void {
        console.log ("Fetching Data");
        this.service.getPlayers().subscribe(data => {
            console.log(data);
            for (var player of data) {
                this.players.push(player);
            }
        })
    }

}