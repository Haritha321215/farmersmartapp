import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {ProductListComponent} from './product-list/product-list.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';


const routes: Routes = [
  {path:'products',component:ProductListComponent},
  {path:'create-product',component:CreateProductComponent},
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'update-product/:id', component:UpdateProductComponent},
  {path:'product-details/:id', component:ProductDetailsComponent},
  {path:'sign-in', component:SignInComponent},
  {path:'registration', component:UserRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
