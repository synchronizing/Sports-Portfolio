import { Component, OnInit, Input } from "@angular/core";
import { CardService } from "../services/card.service";
import { DataSource } from "@angular/cdk/collections";
import { Observable } from "rxjs";
import { OrderService } from "../services/order.service";

import { AuthService } from '../auth/auth.service';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  @Input() user: any = {};

  cards: any;
  cart: any;
  showCart: boolean;
  searchText: string;
  view: string;


  constructor(private cardServ: CardService, private orderServ: OrderService) {}

  ngOnInit() {
    this.cardServ.getAllCards().subscribe(
      res => {
        console.log(res);
        this.cards = res;
      },
      err => {
        console.log(err);
      }
    );
    this.view = "Cart";
    this.showCart = false;
    this.cart = [];
  }

  // Toggle between catalogue or cart view
  toggleCart() {
    if (this.showCart) {
      this.view = "Cart";
    } else {
      this.view = "Rick's Cards";
    }
    this.showCart = !this.showCart;
  }

  // Move a card from catalogue to cart
  toCart(card) {
    for (var i = 0; i < this.cart.length; i++) {
      if (this.cart[i] === card) {
        alert(
          "You are attempting to add a card that is already added to your cart."
        );
        return;
      }
    }

    this.cart.push(card);
  }

  removeFromCart(card) {
    for (var i = 0; i < this.cart.length; i++)
      if (this.cart[i] === card) {
        this.cart.splice(i, 1);
        break;
      }
  }
  sendOrder(data) {
    this.orderServ.postOrder(data)
      .subscribe(data=> {
        console.log(data);
        this.order = data;
      });
  }
}
