import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ProductsService } from 'src/app/services/products.service';
import { IProduct } from 'src/app/Models/iproduct';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/Models/icategory';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


  categories : ICategory[] = [];
  catId = 0;

  product : IProduct = {} as IProduct;
  constructor( private location: Location , private productService : ProductsService , private router :Router){

  }


  ngOnInit(): void {
    this.getCategories();
  }


  submit(){
    console.log(this.product);

    this.productService.add(this.product).subscribe( res => {
      alert("Product Added");
      this.router.navigate(['orders']);

    })
  }

  getCategories(){
  
      this.productService.getAllCategories().subscribe(res => {
        this.categories = res;
      })
  }

  back(){
    this.location.back();
   }

}
