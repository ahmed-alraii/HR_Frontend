import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/Models/iuser';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  form! : FormGroup;

  Fb : FormBuilder = new FormBuilder;

  isLoggedIn : Boolean = false;

  constructor(private userAuth : UserAuthService , private router : Router){
   // this.isLoggedIn =  this.userAuth.isLoggedIn();

    this.userAuth.getStatus().subscribe(res => {
      this.isLoggedIn = res;
    })
  }


  ngOnInit(): void {
   //this.isLoggedIn = this.userAuth.isLoggedIn();
   this.initForm()
   this.userAuth.getStatus().subscribe(res => {
    this.isLoggedIn = res;
  })
  }


  initForm(){
    return this.form = this.Fb.group({
      'email': [null , Validators.required],
      'password': [null , Validators.required]
    })
  
  }


  login(): any{
  //  let user : IUser = {email:"user20@gmail.com" , password:"123456"} as IUser;

  let result;
  if(this.form.invalid) return false;

   let user = this.form.value as IUser;

    this.userAuth.login(user).subscribe(res => {

      let users =  res;
      let existedUser =  users.find(x => x.email == user.email && x.password == user.password);
    
     
       if(existedUser == undefined)  return alert('Alert Invalid')
       else{
        let token = '123456789abcde';
        localStorage.setItem('token' , token);
        
       return this.router.navigate(['home']);
       }
  
    });
    
   
    
  }
  
  

  logout(){
    this.userAuth.logout();
   
  }
  




}
