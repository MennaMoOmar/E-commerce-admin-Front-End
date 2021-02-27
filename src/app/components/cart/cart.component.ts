import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {

  constructor(private myService: ProductsService, private myActivatedRoute: ActivatedRoute) { }

  /*var*/
  products
  totalPrice: number = 0
  price: Array<any> = []
  subscriber
  productInfoArr: Array<any> = []
  productImgoArr: Array<any> = []
  order: Array<any> = []


  /* local storage */
  cart: Array<any> = [
    {
      productId: "6031188490d8610015e3967b",
      name: "product 1",
      quantity: 1,
      current_price: 10,
      image: "948532f08c17380aa3cedbf9a636a402.jpg"
    },
    {
      productId: "603118b190d8610015e3967c",
      name: "product 2",
      quantity: 2,
      current_price: 50,
      image: "948532f08c17380aa3cedbf9a636a402.jpg"
    },
    {
      productId: "603118b190d8610015e3967c",
      name: "product 3",
      quantity: 1,
      current_price: 50,
      image: "948532f08c17380aa3cedbf9a636a402.jpg"
    }
  ]



  /*get product by id*/
  // getProductById(id) {
  //   this.subscriber = this.myService.displayProductById(id)
  //     .subscribe((product) => {
  //       this.productInfoArr.push(Object.values(product)[0]);
  //     },
  //       (error) => {
  //         console.log(error);
  //       }
  //     )
  //     console.log(this.productInfoArr)
  // }


  /*set orders*/
  setProductOnCart() {
    for (let i = 0; i < this.cart.length; i++) {
      var id = Object.values(this.cart)[i]['productId']
      this.productInfoArr.push(this.cart[i])
      this.price.push(this.cart[i].current_price * this.cart[i].quantity)
      this.productImgoArr.push(`https://amnesia-skincare.herokuapp.com/api/images/show/${this.productInfoArr[i].image}`)
      this.totalPrice += this.productInfoArr[i].current_price * this.productInfoArr[i].quantity
    }
  }

  /* add quantity */
  add(index) {
    this.productInfoArr[index].quantity++
    this.totalPrice += this.productInfoArr[index].current_price
    this.price[index] += this.productInfoArr[index].current_price
  }

  /* minus quantity */
  minus(index) {
    if (this.productInfoArr[index].quantity > 1) {
      this.productInfoArr[index].quantity--
      this.totalPrice -= this.productInfoArr[index].current_price
      this.price[index] -= this.productInfoArr[index].current_price
    }
  }


  /*delete product from cart*/
  deleteProduct(index, e) {
    this.cart.splice(index, 1)
    document.getElementsByTagName("tr")[parseInt(index) + 1].style.display = "none";
    // document.getElementsByTagName("tr")[parseInt(index) + 1].remove();
    this.totalPrice -= this.productInfoArr[index].current_price * this.productInfoArr[index].quantity
  }

  /* confirm order*/
  crmOrder() {
    console.log(this.cart)
    localStorage.removeItem('order')
    for (let i = 0; i < this.cart.length; i++) {
      this.order.push({ productId: this.cart[i].productId, quantity: this.cart[i].quantity })
      localStorage.setItem('order', JSON.stringify(this.order))
    }
    console.log(this.order)
  }

  /*onInt*/
  ngOnInit(): void {
    this.setProductOnCart()

    //store in local storage
    localStorage.setItem('cart', JSON.stringify(this.cart))
  }

  /*onDestroy*/
  ngOnDestroy(): void { }
}
