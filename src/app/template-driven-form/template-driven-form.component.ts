import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from './customer';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  constructor() { }

  customer = new Customer()

  ngOnInit(): void {
  }
  submit(form:NgForm){
    console.log(form)
    console.log(JSON.stringify(form.value))

  }

}
