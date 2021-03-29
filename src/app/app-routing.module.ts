import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicallyAddingInputElememtsComponent } from './dynamically-adding-input-elememts/dynamically-adding-input-elememts.component';
import { ReactToChangesComponent } from './react-to-changes/react-to-changes.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveValidationComponent } from './reactive-validation/reactive-validation.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ValidationMessagesComponent } from './validation-messages/validation-messages.component';

const routes: Routes = [
  { path: 'template-driven', component: TemplateDrivenFormComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'reactive-validation', component: ReactiveValidationComponent},
  { path: 'changes', component: ReactToChangesComponent },
  { path: 'validationmessages', component: ValidationMessagesComponent },
  { path: 'addinput', component: DynamicallyAddingInputElememtsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
