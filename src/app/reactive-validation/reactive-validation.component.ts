import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Customer } from '../template-driven-form/customer';

@Component({
  selector: 'app-reactive-validation',
  templateUrl: './reactive-validation.component.html',
  styleUrls: ['./reactive-validation.component.css']
})
export class ReactiveValidationComponent implements OnInit {

  constructor(private fb : FormBuilder) { }
  customer = new Customer()
  customerForm:FormGroup



  ngOnInit(): void {
    this.customerForm = this.fb.group({
      firstname:['', [Validators.required, Validators.minLength(3)]],
      lastname:['', [Validators.required, Validators.minLength]],
      email:['',[Validators.required, Validators.email]],
      phone:[''],
      notification:'email',
      sendCatalog:false,
      addressType:'home',
      street1:'',
      street2:'',
      city:'',
      state:'',
      zip:null
    })
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

  submit(){
    console.log(JSON.stringify(this.customerForm.value))
  }


}
