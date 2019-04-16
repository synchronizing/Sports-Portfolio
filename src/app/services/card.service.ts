import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { CardInterface } from '../models/Card'

import 'rxjs/add/operator/map';


@Injectable()
export class CardService {

    constructor(private http: Http) { }

    //get all cards from api
    getAllCards() {
        return this.http.get('/api/card')
            .map(res => res.json());
    }
    /*
    public getAllCards():Observable<CardInterface[]> {

        let URI = `${this.serverApi}/card/`;
        return this.http.get(URI)
            .map(res => res.json())
            .map(res => <CardInterface[]>res.cards);
    }
    */

}