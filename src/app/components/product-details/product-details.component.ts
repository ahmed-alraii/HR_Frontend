import { Observable } from 'rxjs';
import { StaticProductService } from 'src/app/services/static-product.service';
import { AfterContentChecked, Component, OnChanges, OnInit, SimpleChanges, ViewChild  } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/services/products.service';
import { ProductListComponent } from '../order/product-list/product-list.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit , OnChanges , AfterContentChecked{

  params:any = {};
  id : any  = 0;
  pId : number  = 0;
  categoryId : number  = 0;
  product : IProduct | undefined  ;
  currentProduct : any   ;

  allIds : any[] = [];
  index = 0;

 



  constructor( private staticProductService : StaticProductService ,
    private productService : ProductsService ,
     private activatedRoute: ActivatedRoute ,
     private router: Router, 
     private location: Location,
     ){

    //router.navigate(['home']);



    activatedRoute.params.subscribe( (params : any) => {
      this.params.id = params.id;
      this.pId = params.id;

    });

    // this.id =  activatedRoute.snapshot.paramMap.get('id') as number | null;

    // this.product = staticProductService.getById(this.id)

    // this.allIds = staticProductService.getAll()?.filter(x => x.id) as [];

    this.id =  activatedRoute.snapshot.paramMap.get('id') ;

    this.productService.getById(this.id).subscribe(res => {

      this.currentProduct = res;
      this.categoryId = this.currentProduct.categoryId;
     

      this.productService.getByCategoryId(+this.categoryId).subscribe(res => {
        this.allIds = res;

        this.index =this.allIds.findIndex(x => x.id == this.currentProduct.id);
       
      });
      
    });

  }

  ngOnInit(): void {

  
    this.productService.getById(this.id).subscribe(res => {

      this.currentProduct = res;
      this.categoryId = this.currentProduct.categoryId;
     

      this.productService.getByCategoryId(+this.categoryId).subscribe(res => {
        this.allIds = res;

        this.index =this.allIds.findIndex(x => x.id == this.currentProduct.id);
        
      });
      
    });

    
  }

  ngOnChanges(changes: SimpleChanges): void {
    
   
  }


  ngAfterContentChecked(): void {
   
  }
   next(){

    // let id
    // if(this.id != null){

    //   if(this.id < this.allIds.length ){
    //     id = +this.id + 1;
    //     this.id = id;
    //   }
    
    // }

     // let prod = this.allIds.find(id => id == id );

  //  if(prod != null){
  //   this.product = this.staticProductService.getById(this.id)
  //   this.router.navigate(['orders' ,  this.id]);
  //  }


    // if(this.index < this.allIds.length - 1 ){
    //   this.index++;
    //   this.id = this.allIds[this.index].id;
    //   console.log(this.id);
    //   this.product = this.staticProductService.getById(this.id)
    //   this.router.navigate(['/orders' ,  this.id]);
    // }


    this.productService.getByCategoryId(+this.categoryId).subscribe(res => {
      this.allIds = res;

      if(this.index < this.allIds.length - 1 ){

        this.index++;

        this.pId = this.allIds[this.index].id;

       this.productService.getById(this.pId).subscribe(res => {
          this.currentProduct = res;
        })
        this.router.navigate(['/orders' ,  this.pId]);
        console.log( this.currentProduct);
      }
  
      
    })


    return null
  }


   prev(){

    // let id 

    // if(this.id != null){
      
    //   if( this.id > 1){
    //    id = +this.id - 1;
    //    this.id = id;
    //   }

    // }
    // let prod = this.allIds.find(id => id == id );
 
    // if(prod != null){
     
    //  this.product = this.staticProductService.getById(this.id)
    //  this.router.navigate(['orders' ,  this.id]);
    // }

    // console.log(this.index );
    
    // if(this.index > 0 ){
    //   this.index--;
    //   this.id = this.allIds[this.index].id;
    //   this.product = this.staticProductService.getById(this.id)
    //   this.router.navigate(['/orders' ,  this.id]);
    // }


     
    this.productService.getByCategoryId(+this.categoryId).subscribe(res => {
      this.allIds = res;

      console.log(this.index);
      

      if(this.index > 0 ){

        this.index--;

        this.pId = this.allIds[this.index].id;

       this.productService.getById(this.pId).subscribe(res => {
          this.currentProduct = res;
        })
        this.router.navigate(['/orders' ,  this.pId]);
        console.log( this.currentProduct);
      }
  
    })

     return null

   }

   back(){
    this.location.back();
   }



}
