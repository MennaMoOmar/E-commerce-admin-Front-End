import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import{ ReactiveFormsModule } from "@angular/forms"
import {UsersService} from './services/users.service'
import { HttpClientModule} from '@angular/common/http'
// import {RouterModule, Routes} from '@angular/router'
// import { AngularFontAwesomeModule } from 'angular-font-awesome';


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
import { AppRoutingModule } from './app-routing.module';
import { from } from 'rxjs';
import { ValidationDirective } from './directives/validation.directive';
import { ValidationCorrectDirective } from './directives/validation-correct.directive';
import { ValidationErrorDirective } from './directives/validation-error.directive';
import { PasswordErrorDirective } from './directives/password-error.directive';
import { ConfirmedComponent } from './confirmed/confirmed.component';
import { FailComponent } from './components/fail/fail.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


/* imports materialui */
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { OrderCompletedComponent } from './components/order-completed/order-completed.component';
const materialUi = [
  MatProgressSpinnerModule
]


// const  routes : Routes = [
//   {path:'', component:ProfileComponent},
//   {path:'profile', component:ProfileComponent},
//   {path:'profileEdit', component:ProfileEditComponent},
//   {path:'profileOrders', component:ProfileOrdersComponent},
//   {path:'profileOrderDetails', component:ProfileOrderDetailComponent},
//   {path:'cart', component:CartComponent},
//   {path:'cartBuy', component:CartBuyComponent},
//   {path:'cartEmpty', component:CartEmptyComponent}
// ]

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProfileEditComponent,
    ProfileOrdersComponent,
    ProfileViewComponent,
    ProfileOrderDetailComponent,
    FooterComponent,
    CartComponent,
    CartEmptyComponent,
    CartBuyComponent,
    ValidationDirective,
    ValidationCorrectDirective,
    ValidationErrorDirective,
    PasswordErrorDirective,
    ConfirmedComponent,
    FailComponent,
    ResetpasswordComponent,
    OrderCompletedComponent,
  ],
  imports: [
    BrowserModule,
    // RouterModule,
    FormsModule,
    // RouterModule.forRoot(routes),
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // AngularFontAwesomeModule
    ...materialUi
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
