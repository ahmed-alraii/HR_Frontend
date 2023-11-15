import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from '../Models/iuser';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {


  public userLoggedIn : BehaviorSubject<Boolean>;

  constructor(private http : HttpClient) { 

   this.userLoggedIn = new BehaviorSubject<Boolean>(false);

  }

   login(user : IUser): Observable<IUser[]>{
    let result : any;
    return this.http.get<IUser[]>(`${environment.apiUrl}/users`);
   }


   logout(){
      localStorage.removeItem('token');
      this.userLoggedIn.next(false);
    
   }


   isLoggedIn(){
    
    if(localStorage.getItem('token')){
      this.userLoggedIn.next(true);
      return true;
    }else{
      return false;
    }
    // return localStorage.getItem('token')? true : false ;
   }

   getStatus(){
    return this.userLoggedIn.asObservable();
   }

   regiset(user : IUser) : Observable<IUser>{

   return this.http.post<IUser>(`${environment.apiUrl}/users` , JSON.stringify(user) , {
      headers : new HttpHeaders({
        'Content-Type':'application/json'
      })
    } )

   }
    
}
