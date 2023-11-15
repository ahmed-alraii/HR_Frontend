import { Injectable } from '@angular/core';
import { Observable, from , of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotionsAdsService {

  private ads: string[];

  constructor() {
    this.ads = [
      'Sale up to 25%',
      'Sale up to 50%',
      'Discount 25%',
      'Discount 25%',
      'Discount 25%',
      'Discount 25%',
      'Discount 30%',
      '',
      'Balck Friday'
    ]
   }

   getSchudleAd(interTime: number) : Observable<string>{

    return new Observable<string>( obs => {
      let counter = 0;
      // next , error , complete

      // obs.next();
      // obs.error( res );
      // obs.complete( res );

      let time = setInterval( () =>{

        console.log('interveal ......');
        
       if(this.ads[counter] == '') obs.error('empty Ads..')

       if(counter == this.ads.length) obs.complete();

        obs.next(this.ads[counter]);
        counter++;

      
      } , interTime * 1000);

      return {
        unsubscribe() {
          clearInterval(time);
          console.log("unscribed.....");
        },
      }
      
    });


   }

   getSerialAds(...arr:number[]){
   // return from(this.ads)
     console.log(...arr);
     
    return of(...this.ads)
   }
}
