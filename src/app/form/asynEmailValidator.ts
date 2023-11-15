import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import {  timer } from 'rxjs';
import {  map, switchMap } from 'rxjs/operators';
import { UsersService } from '../services/users.service';
import { IUser } from '../Models/iuser';

export function emailValidator(
    usersService: UsersService,
): AsyncValidatorFn  {
    return (control: AbstractControl) => {

       // let isExists = false;

        // usersService.getAll().subscribe(res => {
            
        //   let result =  res.find(x => x.email == control?.value );

        //   if(result != undefined) isExists = true;
        // })

        // return timer(500).pipe(
        //     switchMap(() =>
        //     usersService.checkEmailExists()
        //         .pipe(map((result: {exists: boolean}) => result.exists ? {asyncInvalid: true} : null))))

        // }


          return timer(500).pipe(
            switchMap(() =>
             usersService.checkEmailExists(control?.value)
             .pipe(map((res) => {
                console.log(res)
              return  res.length > 0 ? {asyncInvalid: true} : null
               
             }))))
          }
        
        

}
