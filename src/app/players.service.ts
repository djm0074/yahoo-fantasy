import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PlayerRow } from "./player-row.model";

@Injectable({
    providedIn: 'root'
})
export class PlayersService {
    private baseUrl:string='https://fantasy-5c9a8-default-rtdb.firebaseio.com/';
    private playersEndPoint:string='players.json';
     
    constructor(private http:HttpClient) {

    }

    public getPlayers() {
        return this.http.get<PlayerRow []>(this.baseUrl + this.playersEndPoint);
    }

    public getPlayer(index:number) {
        return this.http.get<PlayerRow>(this.baseUrl + 'players/' + index + '.json');
    }

}