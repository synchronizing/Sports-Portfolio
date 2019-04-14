import { Component, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';
import { CardInterface } from '../models/Card'



@Component({
  selector: 'app-view-card',
  templateUrl: './view-card.component.html',
  styleUrls: ['./view-card.component.scss']
})
export class ViewCardComponent implements OnInit {

  private cards: CardInterface[] = [];




  constructor(private cardServ: CardService) { }

  ngOnInit() {
    this.loadCards();
  }

  public loadCards() {
    //get all cards from server and update the cards property
    this.cardServ.getAllCards().subscribe(
      response => this.cards = response,)
  }

    /*deleteCard. The deleted card is being filtered out using the .filter method
    public deleteCard(card: CardInterface) {
      this.cardServ.deleteCard(card._id).subscribe(
        response =>    this.cards = this.cards.filter(cards => cards !== card),)
      }
      */

}