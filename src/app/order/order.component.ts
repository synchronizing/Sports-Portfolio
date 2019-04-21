import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  
  order: any;
  //customerId is the parameter when accessing orders.
  //We need to find a way to set customerId to be = to user._id
  customerId: string;
  user: any;

  

  constructor(private orderServ: OrderService, private authServ: AuthService) { }

  ngOnInit() {
    //this.authServ.$userSource.asObservable();
    //this.customerId = $userSource._id;
    //Here is where we need to get the user._id;
    

    this.orderServ.getOrder(this.customerId)
      .subscribe(res => {
        console.log(res);
        this.order = res;
      }, err => {
        console.log(err);
      });
  }

}
