import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import { Customer } from '../template-driven-form/customer';
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-validation-messages',
  templateUrl: './validation-messages.component.html',
  styleUrls: ['./validation-messages.component.css']
})
export class ValidationMessagesComponent implements OnInit {
  constructor(private fb : FormBuilder) { }
  customer = new Customer()
  customerForm:FormGroup
  firstNameMessage:string;
  emailMessage:string

  private firstNameErrorMessages = {
    required:"First Name Required",
    minlength:"Minimum of 3 characters"
  }

  private emailErrorMessages = {
    required:"Email address required",
    email: "Enter A valid Email Address"
  }


  ngOnInit(): void {

    this.customerForm = this.fb.group({
      firstname:['',[Validators.required,Validators.minLength(3)]],
      email:['', [Validators.required, Validators.email]]
    })

    let firstnameControl = this.customerForm.get('firstname')
    firstnameControl.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe(()=> this.setMessage(firstnameControl))


    let emailControl = this.customerForm.get('email')
    emailControl.valueChanges.subscribe(
      ()=> this.setEmailMessage(emailControl)
    )

}

setMessage(c:AbstractControl):void{
  this.firstNameMessage = "";
  if((c.touched || c.dirty) && !c.valid){
    this.firstNameMessage = Object.keys(c.errors).map(key=> this.firstNameMessage += this.firstNameErrorMessages[key]).join(' ');
  }
}

setEmailMessage(c:AbstractControl):void{
  this.emailMessage = '';
  if((c.touched || c.dirty) && c.errors){
    this.emailMessage = Object.keys(c.errors).map(key => this.emailMessage += this.emailErrorMessages[key]).join(' ');
  }

}


submit(form){
  console.log(form.values)
}
}
