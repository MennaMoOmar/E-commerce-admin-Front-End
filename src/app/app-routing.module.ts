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
import{ProductsListComponent} from './components/products-list/products-list.component';
import{AdminDashboardComponent} from './components/admin-dashboard/admin-dashboard.component'
import { AdminUserOrdersComponent } from './components/admin-user-orders/admin-user-orders.component';
import { AdminAllOrdersComponent } from './components/admin-all-orders/admin-all-orders.component';
import { AdminOrderDetailsComponent } from './components/admin-order-details/admin-order-details.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminProductAddComponent } from './components/admin-product-add/admin-product-add.component';


const  routes : Routes = [
  {path:'', component:ProfileComponent},
  {path:'profile', component:ProfileComponent},
  {path:'profileEdit', component:ProfileEditComponent},
  {path:'profileOrders', component:ProfileOrdersComponent},
  {path:'profile/:id', component:ProfileOrderDetailComponent},
  {path:'cart', component:CartComponent},
  {path:'cartBuy', component:CartBuyComponent},
  {path:'cartEmpty', component:CartEmptyComponent},
  {path:'confirmed', component:ConfirmedComponent},
  {path:'fail', component:FailComponent},
  {path:'resetpassword/:token', component:ResetpasswordComponent},
  {path:'footer', component:FooterComponent},
  {path:'productInfo/:_id', component:ProductViewComponent},
  // {path:'productCard', component: ProductCardComponent},
  {path: 'productList', component:ProductsListComponent},
  {path: 'admin', component:AdminDashboardComponent},
  {path:'adminUserOrders/:id', component:AdminUserOrdersComponent},
  {path:'adminAllOrders', component:AdminAllOrdersComponent},
  {path:'adminOrderDetails/:id', component:AdminOrderDetailsComponent},
  {path:'adminProductAdd', component:AdminProductAddComponent}


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
