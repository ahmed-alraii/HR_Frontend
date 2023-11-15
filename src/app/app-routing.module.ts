import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/order/product-list/product-list.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { authGuard } from './guards/auth.guard';
import { OrderMasterComponent } from './components/order/order-master/order-master.component';
import { AddComponent } from './components/order/add/add.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';


const routes: Routes = [
  {path:'' , component:MainLayoutComponent , children : [

    {path:'' ,  redirectTo: 'home' ,  pathMatch : 'full'},
    {path:'home' , component: HomeComponent ,  canActivate:[authGuard]},
    {path:'orders' , component: OrderMasterComponent , canActivate:[authGuard]},
    {path:'orders/:id' , component: ProductDetailsComponent},
    {path:'add-order' , component: AddComponent},
    {path:'user-register' , component: UserRegisterComponent},
    {path:'login' , component: LoginComponent , } ,
   
  ]},

 // {path:'login' , component: LoginComponent , } ,
  {path:'**' ,component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
