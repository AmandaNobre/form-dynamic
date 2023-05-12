import { NgModule } from '@angular/core';
import { FormDynamicAngularComponent } from './form-dynamic-angular.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'

import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { TreeSelectModule } from 'primeng/treeselect';
import { RadioButtonModule } from 'primeng/radiobutton';
import { AutoCompleteModule } from 'primeng/autocomplete';


@NgModule({
  declarations: [
    FormDynamicAngularComponent
  ],
  imports: [
    DividerModule,
    BrowserModule,
    CalendarModule,
    DropdownModule,
    TreeSelectModule,
    RadioButtonModule,
    AutoCompleteModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormDynamicAngularComponent
  ]
})
export class FormDynamicAngularModule { }
