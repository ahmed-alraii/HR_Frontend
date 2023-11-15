import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  //  let result  = false;
  //   inject(UserAuthService).getStatus().subscribe(res => {
  //     res ?   result = true
  //     : inject(Router).navigate(['/login']);
  //   })
  //    return result;

      return inject(UserAuthService).isLoggedIn()
        ?  true
        : inject(Router).navigate(['/login']);
     
};
