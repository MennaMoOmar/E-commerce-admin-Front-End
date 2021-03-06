import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule, Routes} from '@angular/router'


import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { ProfileOrdersComponent } from './components/profile-orders/profile-orders.component';
import { ProfileViewComponent } from './components/profile-view/profile-view.component';
import { ProfileOrderDetailComponent } from './components/profile-order-detail/profile-order-detail.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import { CartEmptyComponent } from './components/cart-empty/cart-empty.component';
import { CartBuyComponent } from './components/cart-buy/cart-buy.component';
import {ConfirmedComponent} from './components/confirmed/confirmed.component'
import {FailComponent} from './components/fail/fail.component'
import {ResetpasswordComponent} from './components/resetpassword/resetpassword.component'
import { ProductViewComponent } from './components/product-view/product-view.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import{ProductsListComponent} from './components/products-list/products-list.component'


const  routes : Routes = [
  {path:'', component:ProfileComponent},
  {path:'profile', component:ProfileComponent},
  {path:'profileEdit', component:ProfileEditComponent},
  {path:'profileOrders', component:ProfileOrdersComponent},
  {path:'profileOrders/:id', component:ProfileOrderDetailComponent},
  {path:'cart', component:CartComponent},
  {path:'cartBuy', component:CartBuyComponent},
  {path:'cartEmpty', component:CartEmptyComponent},
  {path:'confirmed', component:ConfirmedComponent},
  {path:'fail', component:FailComponent},
  {path:'resetpassword/:token', component:ResetpasswordComponent},
  {path:'footer', component:FooterComponent},
  {path:'productInfo/:_id', component:ProductViewComponent},
  // {path:'productCard', component: ProductCardComponent},
  {path: 'productList', component:ProductsListComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
