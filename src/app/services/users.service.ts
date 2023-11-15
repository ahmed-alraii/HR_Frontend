import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IUser } from '../Models/iuser';

@Injectable({
  providedIn: 'root'
})
export class UsersService {



  constructor(private readonly http: HttpClient) {
  }

  checkEmailExists(email: string): Observable<IUser[]>{

    return this.http.get<IUser[]>(`${environment.apiUrl}/users?email=${email}`);
 
  }


  getAll(): Observable<IUser[]>{
    return this.http.get<IUser[]>(`${environment.apiUrl}/users/`);
  }

}
