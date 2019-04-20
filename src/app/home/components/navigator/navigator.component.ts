import { Component, OnInit } from '@angular/core';
import { CardService } from '../../../services/card.service';
import { CardInterface } from '../../../models/Card'
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {
  
  card: any;


  constructor(private cardServ: CardService) { }

  ngOnInit() {
    this.cardServ.getAllCards()
      .subscribe(res => {
        console.log(res);
        this.card = res;
      }, err => {
        console.log(err);
      });
  }

}
