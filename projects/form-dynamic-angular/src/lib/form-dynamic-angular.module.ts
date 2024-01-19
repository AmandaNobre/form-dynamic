import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { TreeSelectModule } from 'primeng/treeselect';
import { RadioButtonModule } from 'primeng/radiobutton';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputTextModule } from 'primeng/inputtext';
import { FormDynamicAngularComponent } from './form-dynamic-angular.component';
import { MessageService } from 'primeng/api';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CheckboxModule } from 'primeng/checkbox';
import { InputSwitchModule } from 'primeng/inputswitch';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CommonModule } from '@angular/common';
import { MultiSelectModule } from 'primeng/multiselect';
import { FileUploadModule } from 'primeng/fileupload';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { TableModule } from 'primeng/table';
import { PasswordModule } from 'primeng/password';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    FormDynamicAngularComponent
  ],
  imports: [
    PasswordModule,
    ButtonModule,
    TableModule,
    FileUploadModule,
    NgxDropzoneModule,
    MultiSelectModule,
    CommonModule,
    SelectButtonModule,
    InputSwitchModule,
    CheckboxModule,
    InputTextareaModule,
    InputTextModule,
    DividerModule,
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
  providers: [
    MessageService
  ],
  exports: [
    FormDynamicAngularComponent
  ]
})

export class FormDynamicAngularModule { }
