import { HttpClient } from "@angular/common/http";
import { Component, Injectable, OnInit } from "@angular/core";
import { PlayerRow } from "./player-row.model";


@Injectable()
@Component({
    selector: "player-row",
    templateUrl: "player-row.component.html"
})
export class PlayerRowComponent implements OnInit{
    player: PlayerRow | undefined;
    constructor(private http: HttpClient) {  
    }
    ngOnInit(): void {
        console.log("Sending a get request to the server");
        this.getPlayers()
        console.log("Registering showPlayer as a subscriber");
        this.showPlayers();
    }

    getPlayers() {
        return this.http.get<PlayerRow>('https://fantasy-5c9a8-default-rtdb.firebaseio.com/players.json')
    }
    showPlayers() {
        this.getPlayers().subscribe((data: PlayerRow) => {
            console.log(data);
            this.player = data;
        })
    }
}