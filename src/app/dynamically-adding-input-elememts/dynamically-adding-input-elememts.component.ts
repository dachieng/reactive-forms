import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dynamically-adding-input-elememts',
  templateUrl: './dynamically-adding-input-elememts.component.html',
  styleUrls: ['./dynamically-adding-input-elememts.component.css']
})
export class DynamicallyAddingInputElememtsComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  customerForm:FormGroup

  get addressGroup():FormArray{
    return <FormArray>this.customerForm.get('addressGroup')
  }

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      addressGroup: this.fb.array( [this.buildAddress()] )
    })

  }

  buildAddress():FormGroup{
    return this.fb.group({
      city:[''],
      state:[''],
      zip:['']
      })
  }

  addAddress():void{
    this.addressGroup.push(this.buildAddress())
  }

  submit(form){
    console.log(form.value)
  }

}
