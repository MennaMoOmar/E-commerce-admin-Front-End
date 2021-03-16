import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from "@angular/forms"
import { UsersService } from './services/users.service'
import { HttpClientModule } from '@angular/common/http'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { from } from 'rxjs';
import { ValidationDirective } from './directives/validation.directive';
import { ValidationCorrectDirective } from './directives/validation-correct.directive';
import { ValidationErrorDirective } from './directives/validation-error.directive';
import { PasswordErrorDirective } from './directives/password-error.directive';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminUserComponent } from './components/admin-user/admin-user.component';
import { AdminUserOrdersComponent } from './components/admin-user-orders/admin-user-orders.component';
import { AdminAllOrdersComponent } from './components/admin-all-orders/admin-all-orders.component';
import { AdminOrderDetailsComponent } from './components/admin-order-details/admin-order-details.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminProductAddComponent } from './components/admin-product-add/admin-product-add.component';
import { AdminProductEditComponent } from './components/admin-product-edit/admin-product-edit.component';


/* imports materialui */
import { MatSliderModule } from '@angular/material/slider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AdminProductEditComponent } from './components/admin-product-edit/admin-product-edit.component';




const materialUi = [
  MatProgressSpinnerModule,
  MatGridListModule,
  MatSliderModule,
  MatExpansionModule,
  MatSelectModule,
  MatCheckboxModule,
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatSnackBarModule,
  MatFormFieldModule
]


@NgModule({
  declarations: [
    AppComponent,
    ValidationDirective,
    ValidationCorrectDirective,
    ValidationErrorDirective,
    PasswordErrorDirective,
    AdminDashboardComponent,
    AdminUserComponent,
    AdminUserOrdersComponent,
    AdminAllOrdersComponent,
    AdminOrderDetailsComponent,
    AdminProductsComponent,
    AdminProductAddComponent,
    AdminProductEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ...materialUi
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
