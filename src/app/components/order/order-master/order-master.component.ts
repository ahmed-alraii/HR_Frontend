import { Component , ViewChild , AfterContentChecked } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.css']
})
export class OrderMasterComponent implements AfterContentChecked {


  categories: ICategory[] = [];
  selectedId : number = 0;
  total: number = 0;

  @ViewChild(ProductListComponent) private productListComponent = {} as ProductListComponent;
  
  constructor(){
    this.categories = [
      {id: 1 , name : "test 1"},
      {id: 2 , name : "test 2"},
      {id: 3 , name : "test 3"},
    ];
  }

  onChangTotal(value:number){

    this.total = value
  }

  ngAfterContentChecked(){

   this.total = this.productListComponent.totalPrice;
  }



}
