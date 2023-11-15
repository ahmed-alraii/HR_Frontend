import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class StaticProductService {

 private products : IProduct[] | null;
  constructor() { 

    this.products = [
      {id: 1 , name : "test 1" , price:1000, quantity : 2  , imageUrl:"", categoryId:1},
      {id: 9 , name : "test 3" , price:5005, quantity : 1  , imageUrl:"", categoryId:3},
      {id: 6 , name : "test 3" , price:5005, quantity : 1  , imageUrl:"", categoryId:3},
      {id: 2 , name : "test 2" , price:2000, quantity : 5 , imageUrl:"", categoryId:2},
      {id: 3 , name : "test 2" , price:3000, quantity : 2  , imageUrl:"", categoryId:2},
      {id: 4 , name : "test 3" , price:4000, quantity : 3  , imageUrl:"", categoryId:3},
      {id: 5 , name : "test 3" , price:5005, quantity : 1  , imageUrl:"", categoryId:3}
    ];

  }


  getAll() : IProduct[] | null{

    return this.products
  }

  getByCategoryId(id:number) : IProduct[] | undefined {

    let filteredProducts = this.products?.filter(x => x.categoryId == id);
    return filteredProducts? filteredProducts : undefined;

  }


  getById(id : number|null) : IProduct | undefined {
    return this.products?.find(x => x.id == id);
  }

  add(product: IProduct){
    this.products?.push(product);
  }
}
