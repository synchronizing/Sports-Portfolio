import { Component, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';
import { CardInterface } from '../models/Card'

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {

  cards: CardInterface[] = [];




  constructor(private cardServ: CardService) { }

  ngOnInit() {
    this.loadCards();
  }

  public loadCards() {
    //get all cards from server and update the cards property
    this.cardServ.getAllCards().subscribe(
      response => this.cards = response)
  }

    /*deleteCard. The deleted card is being filtered out using the .filter method
    public deleteCard(card: CardInterface) {
      this.cardServ.deleteCard(card._id).subscribe(
        response =>    this.cards = this.cards.filter(cards => cards !== card),)
      }
      */

}
