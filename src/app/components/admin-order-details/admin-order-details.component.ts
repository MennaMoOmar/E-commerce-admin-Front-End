import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../../services/orders.service'


@Component({
  selector: 'app-admin-order-details',
  templateUrl: './admin-order-details.component.html',
  styleUrls: ['./admin-order-details.component.css']
})
export class AdminOrderDetailsComponent implements OnInit {

  constructor() { }

  /*var*/
  order
  subscriber

  /* order details*/
  orderDetails() {
    console.log("ss")
  }

  /* oninit */
  ngOnInit(): void {
  }

}
