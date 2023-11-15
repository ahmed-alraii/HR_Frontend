import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Subscription, filter , map, skip, take , every, distinct} from 'rxjs';
import { PromotionsAdsService } from 'src/app/services/promotions-ads.service';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnDestroy{

  isLoggedIn : Boolean = false;
  constructor(private promotionAds: PromotionsAdsService , private userAuth : UserAuthService){

    // this.userAuth.getStatus().subscribe(res => {
    //   this.isLoggedIn = res;
    // })
  }

  private subscripton! : Subscription ;

  ngOnInit(): void {

    let obj = {
      next:(data:string) => {console.log(data)},
      error:(err:string) => {console.log(err)},
      complete: () => {console.log('obervable finisishis')}
    }
    
   //this.subscripton =  this.promotionAds.getSchudleAds(3).subscribe(obj);

   this.subscripton =  this.promotionAds.getSchudleAd(3).subscribe(
    {
      next:(data:string) => {console.log(data)},
      error:(err:string) => {console.log(err)},
      complete: () => {console.log('obervable finisishis')}
    });


    this.promotionAds.getSerialAds(3 , 5).pipe(
      filter(ad => ad.includes('%')) ,
      map(ad => `Ads : ${ad}`),
      // skip(1),
      // take(3),
      distinct(),
     // every(x => x.includes("%"))
    ).subscribe(res => console.log(res));
  

    // this.userAuth.getStatus().subscribe(res => {
    //   this.isLoggedIn = res;
    // })

  }


  ngOnDestroy(): void {
    this.subscripton.unsubscribe();
  }


}
