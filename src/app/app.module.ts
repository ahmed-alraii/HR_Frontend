import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AsideComponent } from './components/aside/aside.component';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/order/product-list/product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightDirective } from './directives/highlight.directive';
import { PositiveValueDirective } from './directives/positive-value.directive';
import { UsdToRialPipe } from './pips/usd-to-rial.pipe';
import { OrderMasterComponent } from './components/order/order-master/order-master.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import {HttpClientModule} from '@angular/common/http';
import { AddComponent } from './components/order/add/add.component';
import { EditOrderComponent } from './components/order/edit-order/edit-order.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    HomeComponent,
    ProductListComponent,
    HighlightDirective,
    PositiveValueDirective,
    UsdToRialPipe,
    OrderMasterComponent,
    LoginComponent,
    NotFoundComponent,
    MainLayoutComponent,
    ProductDetailsComponent,
    AddComponent,
    EditOrderComponent,
    UserRegisterComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
