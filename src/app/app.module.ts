import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveValidationComponent } from './reactive-validation/reactive-validation.component';
import { ReactToChangesComponent } from './react-to-changes/react-to-changes.component';
import { ValidationMessagesComponent } from './validation-messages/validation-messages.component';
import { DynamicallyAddingInputElememtsComponent } from './dynamically-adding-input-elememts/dynamically-adding-input-elememts.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    ReactiveValidationComponent,
    ReactToChangesComponent,
    ValidationMessagesComponent,
    DynamicallyAddingInputElememtsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
