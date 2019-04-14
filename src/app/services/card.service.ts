import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { CardInterface } from '../models/Card'

import 'rxjs/add/operator/map';


@Injectable()
export class CardService {

    constructor(private http: Http) { }

    private serverApi= 'http://localhost:4040';

    public getAllCards():Observable<CardInterface[]> {

        let URI = `${this.serverApi}/card/`;
        return this.http.get(URI)
            .map(res => res.json())
            .map(res => <CardInterface[]>res.cards);
    }

}