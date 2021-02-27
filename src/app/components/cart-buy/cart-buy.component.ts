import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service'
import { OrdersService } from '../../services/orders.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart-buy',
  templateUrl: './cart-buy.component.html',
  styleUrls: ['./cart-buy.component.css']
})
export class CartBuyComponent implements OnInit, OnDestroy {

  constructor(private myService: UsersService, private myServiceOrder: OrdersService, private myActivatedRoute: ActivatedRoute) { }

  /*services*/
  user
  subscriber

    //retrieve from local storage
    localStorageProductsRetrive = localStorage.getItem('cart');

  /*validation on editing*/
  myForm = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z]*"), Validators.maxLength(8)]),
    lastname: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z]*"), Validators.maxLength(8)]),
    phone: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
    country: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z]*")]),
    city: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z]*")]),
    street: new FormControl('', [Validators.required]),
    note: new FormControl('', [Validators.required]),
    payment: new FormControl('', [Validators.required])
  })

  /*save changes*/
  buy() {
    // console.log(this.myForm.controls)
    // console.log(JSON.parse(localStorage.getItem('cart')));
    if (this.myForm.valid) {
      console.log("valid")
      console.log(this.myForm.value)
      const orderinfo = {
        "products" : JSON.parse(localStorage.getItem('order')),
        "note": this.myForm.value.note,
        "address": [`${this.myForm.value.country}`, `${this.myForm.value.city}`, `${this.myForm.value.street}`].join(', '),
      }
      const orderinfoJson = JSON.stringify(orderinfo)
      this.subscriber = this.myServiceOrder.addOrder(orderinfoJson)
        .subscribe((orderinfoJson) => {
          console.log(orderinfoJson);
        },
          (error) => {
            console.log(error);
          }
        )
    }
    else {
      console.log("invalid")
    }
  }


/*get user by id*/
showProfile() {
  this.subscriber = this.myService.getProfile()
    .subscribe((userr) => {
      console.log(userr);
      this.user = userr;
      this.myForm.patchValue({
        firstname: this.user.user.firstname,
        lastname: this.user.user.lastname,
        phone: this.user.user.phones,
        country: this.user.user.addresses.split(', ')[0],
        city: this.user.user.addresses.split(', ')[1],
        street: this.user.user.addresses.split(', ')[2]
      })
    },
      (error) => {
        console.log(error);
      }
    )
}



ngOnInit(): void {
  this.showProfile()
}

ngOnDestroy(): void {
  this.subscriber.unsubscribe();
}

}