import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import { Customer } from '../template-driven-form/customer';

@Component({
  selector: 'app-validation-messages',
  templateUrl: './validation-messages.component.html',
  styleUrls: ['./validation-messages.component.css']
})
export class ValidationMessagesComponent implements OnInit {

  constructor(private fb : FormBuilder) { }
  customer = new Customer()
  customerForm:FormGroup



  ngOnInit(): void {
    this.customerForm = this.fb.group({
      firstname:['', [Validators.required, Validators.minLength(3)]],
      lastname:['', [Validators.required, Validators.minLength(3)]],
      emailGroup:this.fb.group({
        email:['',[Validators.required, Validators.email]],
        emailConfirm:['',[Validators.required, Validators.email]]
      },{validator:this.emailMatcher}),
      phone:[''],
      notification:'email',
      rating:[null, this.ratingValidator],
      rating_param:['',this.ratingValidatorParams(1,5)],
      sendCatalog:false,
      addressType:'home',
      street1:'',
      street2:'',
      city:'',
      state:[''],
      zip:null
    });

    this.customerForm.get('notification').valueChanges.subscribe(
      value => this.setNotification(value)
    )
  }

  setNotification(notifyBy:string){
    const phoneControl = this.customerForm.get('phone')

    if(notifyBy === "text"){
      phoneControl.setValidators(Validators.required)
    }
    else{
      phoneControl.clearValidators();
    }
    phoneControl.updateValueAndValidity()

  }

  populateData(){
    this.customerForm.patchValue({
      firstname:"Dorcas",
      lastname:"oloo",
      email:"oloodorcas99@gmail.com"
    })
  }

  ratingValidator(c:AbstractControl):{[key:string]:boolean} | null{
    if(c.value !== null && (isNaN(c.value)) || c.value < 1 || c.value> 5){
      return {'range':true}
    }
    return null
  }

  ratingValidatorParams(min:number, max:number):ValidatorFn{
      return (c:AbstractControl):{[key:string]:boolean} | null => {
        if (c.value !== null && (isNaN(c.value)) || c.value < min || c.value > max){
          return {'range2':true}
        }
        return null
      }
  }

  emailMatcher(c:AbstractControl):{[key:string]:boolean} | null
  {
    const email = c.get('email')
    const emailConfirm = c.get('emailConfirm')

    if(email.pristine || emailConfirm.pristine){
      return null
    }

    if(email.value !== emailConfirm.value){
      return {'match':true}
    }
    return null
  }

  submit(){
    console.log(JSON.stringify(this.customerForm.value))
  }



}
