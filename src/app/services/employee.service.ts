import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';
import { Observable, catchError, retry } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { ICategory } from '../Models/icategory';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  headers! : HttpHeaders

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({"Content-Type" : "application/json"})
   }

  getAll(): Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}/employees/`).pipe(  
      retry(3),
      catchError( () => {throw new Error('Not Valid, Try again')})
    );
  }

  getById(id : number){

   return this.http.get(`${environment.apiUrl}/orders/${id}`);
  }

  getByCategoryId(categoryId : number): Observable<IProduct[]>{
    return this.http.get<IProduct[]>( `${environment.apiUrl}/orders?categoryId=${categoryId}`);
  }

  add(employee : any){

    let newEmployee = JSON.stringify(employee);
   return this.http.post(`${environment.apiUrl}/employees` ,  newEmployee , { headers : this.headers } ) 
  }

  update(id : number, product : IProduct){

   let newProduct = JSON.stringify(product);
   return this.http.patch(`${environment.apiUrl}/orders/${id}` ,  newProduct , { headers : this.headers } ) 
  
  }

  delete(id : number){
   return this.http.delete(`${environment.apiUrl}/employees/${id}` , { headers : this.headers } ) 
  }

  getAllDepartments(){
    return this.http.get<any>(`${environment.apiUrl}/departments/`);
  }

}
