import { UsersService } from './../../services/users.service';

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { emailValidator } from 'src/app/form/asynEmailValidator';
import { existEmailValidator } from 'src/app/form/existEmailValidator';
import { passwordConfirmationValidator } from 'src/app/form/password-confirm-validator';
import { UserAuthService } from 'src/app/services/user-auth.service';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {

form! : FormGroup;

constructor(private userAuthService : UserAuthService , private router : Router , private Fb : FormBuilder 
  , private usersService : UsersService){
  this.initForm();
}



initForm(){
  return this.form = this.Fb.group({
    name: [null , Validators.required],
    email: [null , [Validators.required , 
     // existEmailValidator(['user1@gmail.com' , 'user2@gmail.com']),
    
    ] ,  
    emailValidator(this.usersService)
  ],
    password: [null ,[Validators.required ]],
    confirmPassword: [null , [Validators.required]],
    phoneNumber: this.Fb.array(['']),
    address: this.Fb.group({
      city:[null , Validators.required],
      postalCode:[null ,Validators.required],
      street:[null ,Validators.required]
    }),
    referal:[null , Validators.required],
    referalOther:[null]
  },
  {
    validators: [ passwordConfirmationValidator('password', 'confirmPassword') ]
  });

}


get phoneNumbers(){
 return this.form.get('phoneNumber') as FormArray;
}

get email(){
  return this.form.get('email');
}


get confirmPassword(){
  return this.form.get('confirmPassword');
}
  
addPhoneNumber(event:any){
   this.phoneNumbers.push(this.Fb.control('' , Validators.required))
  //event.target.classList.add('d-none');
}

onChangeReferal(event : any){

  if(event.target.value == 'other'){

    this.form.get('referalOther')?.setValidators([Validators.required])
  }else{
    this.form.get('referalOther')?.clearValidators();
  }

  this.form.get('referalOther')?.updateValueAndValidity();
}


  submit(){
  
    if(this.form.invalid) return;
    this.form?.removeControl('confirmPassword')
    this.userAuthService.regiset(this.form.value).subscribe(res => {
      console.log(res);

    })
    console.log(this.form.value);
    this.router.navigate(['home']);
  
  }

}
