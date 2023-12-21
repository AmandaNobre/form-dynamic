import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// import { FormDynamicAngularModule } from 'form-dynamic-angular';
import { AppComponent } from './app.component';

import { FormDynamicAngularModule } from 'projects/form-dynamic-angular/src/public-api';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormDynamicAngularModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
