import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn : Boolean = false;
  constructor(private userAuth : UserAuthService , private router: Router ){
    this.userAuth.getStatus().subscribe(res => {
      this.isLoggedIn = res;
    })

    //if(!this.isLoggedIn) userAuth.login();
  }


  ngOnInit(): void {
    this.userAuth.getStatus().subscribe(res => {
      this.isLoggedIn = res;
    })
  }

  logout(){
    this.userAuth.logout();
    this.router.navigate(['login']);
   
  }

  showOrders(){
   //  if(this.isLoggedIn) this.router.navigate(['orders']);
    // else this.router.navigate(['login']);
  }

}
