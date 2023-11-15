import { Component, OnInit, OnChanges ,Input ,Output , EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/services/products.service';
import { StaticProductService } from 'src/app/services/static-product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit , OnChanges{

 // products : IProduct[] | null = null;
  products! : IProduct[] ;

  @Input() categoryId : number = 0;

  @Output() total = new EventEmitter<number>;

  //filterdProducts : IProduct[];
  totalPrice = 0;
  quantUser = 1;


  constructor(private staticProduct : StaticProductService , private productService : ProductsService , private router : Router){

   // this.filterdProducts = this.products;

   this.getAllProducts()

  }

  ngOnInit(): void {
    console.log('init');
   // this.products = this.staticProduct.getAll();
    this.getAllProducts();
  }


  ngOnChanges(){
   // this.filterdProducts = this.products.filter(x => x.categoryId == this.categoryId);

   if(this.categoryId == 0) this.getAllProducts();
   else{
    this.productService.getByCategoryId(this.categoryId).subscribe((res:any) => {
      this.products = res;
      console.log(this.products)
     })

   }
  
  }

  buy(prod:any ){

    if(this.quantUser <= prod.quantity && +this.quantUser > 0){
      prod.quantity -= this.quantUser;
      this.totalPrice += +prod.price * +this.quantUser;
      this.total.emit(this.totalPrice);
    }else{
      alert('Quantity Is Not Valid')
    }
   
   // console.log(this.totalPrice)
    console.log( this.quantUser)
  }

  changeValue(event:any){

    console.log(event.target.value);
    this.quantUser = +event.target.value;
  }

  getByCategoryId() : IProduct[] | undefined{
   let filteredProducts = this.staticProduct.getByCategoryId(this.categoryId);
   return filteredProducts? filteredProducts : undefined;
  }

  addProduct(product : IProduct){
    this.staticProduct.add(product);
  }

  getAllProducts(){

    this.productService.getAll().subscribe(res => {
      this.products = res;
    })
  }

  confirmDelete(id : number){
   let res = confirm('Are You Sure?');

   if(res){
    this.productService.delete(id).subscribe(res => {
     this.products = this.products?.filter(x => x.id != id);
    })
   }
  }

}
