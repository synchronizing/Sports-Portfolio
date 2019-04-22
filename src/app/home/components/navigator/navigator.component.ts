import { Component, OnInit } from '@angular/core';
import { CardService } from '../../../services/card.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {
  
  cards: any;


  constructor(private cardServ: CardService) { }

  ngOnInit() {
    this.cardServ.getAllCards()
      .subscribe(res => {
        console.log(res);
        this.cards = res;
      }, err => {
        console.log(err);
      });
  }

}
