import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Components/cart/cart.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { GetAllBooksComponent } from './Components/get-all-books/get-all-books.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { OrderPlacedComponent } from './Components/order-placed/order-placed.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { QuickViewComponent } from './Components/quick-view/quick-view.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'signup',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'forgetpassword',component:ForgetPasswordComponent},
  {path:'resetpassword/:token',component:ResetPasswordComponent},
  {path:'home',component:HomeComponent,
  children:[
    {path:'books',component:GetAllBooksComponent},
    {path:'quickview',component:QuickViewComponent},
    {path:'cart',component:CartComponent},
    {path:'wishlist',component:WishlistComponent},
    {path:'orderplaced',component:OrderPlacedComponent},
    {path:'orders',component:OrdersComponent}
  ]  
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
