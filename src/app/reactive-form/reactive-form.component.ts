import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { Customer } from '../template-driven-form/customer';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  customer = new Customer()
  customerForm:FormGroup

  ngOnInit(): void {
   /* this.customerForm = new FormGroup({
      firstname:new FormControl(),
      lastname:new FormControl(),
      email: new FormControl(),
      sendCatalog:new FormControl(false),
      addressType:new FormControl('home'),
      street1:new FormControl(),
      street2:new FormControl(),
      city:new FormControl(),
      state:new FormControl(),
      zip:new FormControl()
    })
*/
    this.customerForm = this.fb.group({
      firstname:'',
      lastname:'',
      email:'',
      sendCatalog:false,
      addressType:'home',
      street1:'',
      street2:'',
      city:'',
      state:'',
      zip:null

    })

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
