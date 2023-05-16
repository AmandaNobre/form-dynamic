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
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

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
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
    })
  ],
  exports: [
    FormDynamicAngularComponent
  ],
  // providers: [
  //   TranslateService
  // ]
})
export class FormDynamicAngularModule { }
