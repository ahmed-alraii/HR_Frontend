import { UsersService } from './../../services/users.service';

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { emailValidator } from 'src/app/form/asynEmailValidator';
import { existEmailValidator } from 'src/app/form/existEmailValidator';
import { passwordConfirmationValidator } from 'src/app/form/password-confirm-validator';
import { EmployeeService } from 'src/app/services/employee.service';
import { UserAuthService } from 'src/app/services/user-auth.service';



@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  form! : FormGroup;

  departments! : any[];

  constructor(private employeeService : EmployeeService , private userAuthService : UserAuthService , private router : Router , private Fb : FormBuilder 
    , private usersService : UsersService){
    this.initForm();

    this.getDaprartments();
  }
  
  ngOnInit(): void {
    
  }
  
  
  initForm(){
    return this.form = this.Fb.group({
      name: [null , Validators.required],
      email: [null , Validators.required] , 
      departmentId: [null , Validators.required ],
      
  });
}

getDaprartments(){

  this.employeeService.getAllDepartments().subscribe( res => {
    this.departments = res;
  })
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

      this.employeeService.add(this.form.value).subscribe(res => {
        console.log(res);
  
      })
      console.log(this.form.value);
      this.router.navigate(['employees']);
    
    }
  
}
