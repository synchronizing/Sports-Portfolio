import { Component, OnInit, Input } from '@angular/core';
import { CardService } from '../services/card.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchText;
  
  @Input() user: any = {};

  cards: any;
  cart: any;
  showCart: boolean;

  constructor(private cardServ: CardService) { }

  ngOnInit() {
    this.cardServ.getAllCards()
      .subscribe(res => {
        console.log(res);
        this.cards = res;
      }, err => {
        console.log(err);
      });
    this.showCart = false;
    this.cart = [];
  }

  // Toggle between catalogue or cart view
  toggleCart(){
    this.showCart = !this.showCart;
  }

  // Move a card from catalogue to cart
  toCart(card){
    this.cart.push(card);
  }

}
