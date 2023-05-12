import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'

import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { TreeSelectModule } from 'primeng/treeselect';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { FormComponent } from './form.component';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    DividerModule,
    BrowserModule,
    CalendarModule,
    DropdownModule,
    TreeSelectModule,
    AutoCompleteModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormComponent
  ]

})
export class FormModule { }
