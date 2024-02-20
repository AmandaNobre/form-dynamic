import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
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
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export function HttpLoaderFactory(http) {
    return new TranslateHttpLoader(http);
}
export class FormDynamicAngularModule {
}
FormDynamicAngularModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: FormDynamicAngularModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormDynamicAngularModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: FormDynamicAngularModule, declarations: [FormDynamicAngularComponent], imports: [InputMaskModule,
        InputNumberModule,
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
        HttpClientModule, i1.TranslateModule], exports: [FormDynamicAngularComponent] });
FormDynamicAngularModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: FormDynamicAngularModule, providers: [
        MessageService
    ], imports: [InputMaskModule,
        InputNumberModule,
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
        })] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: FormDynamicAngularModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        FormDynamicAngularComponent
                    ],
                    imports: [
                        InputMaskModule,
                        InputNumberModule,
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
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1keW5hbWljLWFuZ3VsYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZm9ybS1keW5hbWljLWFuZ3VsYXIvc3JjL2xpYi9mb3JtLWR5bmFtaWMtYW5ndWxhci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsVUFBVSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDN0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVC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SSxFQUFFLENBQUMsVUFBVSxDQUFDOzZCQUNuQjt5QkFDRixDQUFDO3FCQUNIO29CQUNELFNBQVMsRUFBRTt3QkFDVCxjQUFjO3FCQUNmO29CQUNELE9BQU8sRUFBRTt3QkFDUCwyQkFBMkI7cUJBQzVCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInXHJcbmltcG9ydCB7IFRyYW5zbGF0ZUh0dHBMb2FkZXIgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9odHRwLWxvYWRlcic7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZUxvYWRlciwgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcbmltcG9ydCB7IEJ1dHRvbk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvYnV0dG9uJztcclxuaW1wb3J0IHsgRGl2aWRlck1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvZGl2aWRlcic7XHJcbmltcG9ydCB7IERyb3Bkb3duTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9kcm9wZG93bic7XHJcbmltcG9ydCB7IENhbGVuZGFyTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9jYWxlbmRhcic7XHJcbmltcG9ydCB7IFRyZWVTZWxlY3RNb2R1bGUgfSBmcm9tICdwcmltZW5nL3RyZWVzZWxlY3QnO1xyXG5pbXBvcnQgeyBSYWRpb0J1dHRvbk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcmFkaW9idXR0b24nO1xyXG5pbXBvcnQgeyBBdXRvQ29tcGxldGVNb2R1bGUgfSBmcm9tICdwcmltZW5nL2F1dG9jb21wbGV0ZSc7XHJcbmltcG9ydCB7IElucHV0VGV4dE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvaW5wdXR0ZXh0JztcclxuaW1wb3J0IHsgRm9ybUR5bmFtaWNBbmd1bGFyQ29tcG9uZW50IH0gZnJvbSAnLi9mb3JtLWR5bmFtaWMtYW5ndWxhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcclxuaW1wb3J0IHsgSW5wdXRUZXh0YXJlYU1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvaW5wdXR0ZXh0YXJlYSc7XHJcbmltcG9ydCB7IENoZWNrYm94TW9kdWxlIH0gZnJvbSAncHJpbWVuZy9jaGVja2JveCc7XHJcbmltcG9ydCB7IElucHV0U3dpdGNoTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9pbnB1dHN3aXRjaCc7XHJcbmltcG9ydCB7IFNlbGVjdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvc2VsZWN0YnV0dG9uJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTXVsdGlTZWxlY3RNb2R1bGUgfSBmcm9tICdwcmltZW5nL211bHRpc2VsZWN0JztcclxuaW1wb3J0IHsgRmlsZVVwbG9hZE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvZmlsZXVwbG9hZCc7XHJcbmltcG9ydCB7IE5neERyb3B6b25lTW9kdWxlIH0gZnJvbSAnbmd4LWRyb3B6b25lJztcclxuaW1wb3J0IHsgVGFibGVNb2R1bGUgfSBmcm9tICdwcmltZW5nL3RhYmxlJztcclxuaW1wb3J0IHsgUGFzc3dvcmRNb2R1bGUgfSBmcm9tICdwcmltZW5nL3Bhc3N3b3JkJztcclxuaW1wb3J0IHsgSW5wdXROdW1iZXJNb2R1bGUgfSBmcm9tICdwcmltZW5nL2lucHV0bnVtYmVyJztcclxuaW1wb3J0IHsgSW5wdXRNYXNrTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9pbnB1dG1hc2snO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEh0dHBMb2FkZXJGYWN0b3J5KGh0dHA6IEh0dHBDbGllbnQpOiBUcmFuc2xhdGVIdHRwTG9hZGVyIHtcclxuICByZXR1cm4gbmV3IFRyYW5zbGF0ZUh0dHBMb2FkZXIoaHR0cCk7XHJcbn1cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEZvcm1EeW5hbWljQW5ndWxhckNvbXBvbmVudFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgSW5wdXRNYXNrTW9kdWxlLFxyXG4gICAgSW5wdXROdW1iZXJNb2R1bGUsXHJcbiAgICBQYXNzd29yZE1vZHVsZSxcclxuICAgIEJ1dHRvbk1vZHVsZSxcclxuICAgIFRhYmxlTW9kdWxlLFxyXG4gICAgRmlsZVVwbG9hZE1vZHVsZSxcclxuICAgIE5neERyb3B6b25lTW9kdWxlLFxyXG4gICAgTXVsdGlTZWxlY3RNb2R1bGUsXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBTZWxlY3RCdXR0b25Nb2R1bGUsXHJcbiAgICBJbnB1dFN3aXRjaE1vZHVsZSxcclxuICAgIENoZWNrYm94TW9kdWxlLFxyXG4gICAgSW5wdXRUZXh0YXJlYU1vZHVsZSxcclxuICAgIElucHV0VGV4dE1vZHVsZSxcclxuICAgIERpdmlkZXJNb2R1bGUsXHJcbiAgICBDYWxlbmRhck1vZHVsZSxcclxuICAgIERyb3Bkb3duTW9kdWxlLFxyXG4gICAgVHJlZVNlbGVjdE1vZHVsZSxcclxuICAgIFJhZGlvQnV0dG9uTW9kdWxlLFxyXG4gICAgQXV0b0NvbXBsZXRlTW9kdWxlLFxyXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgIEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICBUcmFuc2xhdGVNb2R1bGUuZm9yUm9vdCh7XHJcbiAgICAgIGxvYWRlcjoge1xyXG4gICAgICAgIHByb3ZpZGU6IFRyYW5zbGF0ZUxvYWRlcixcclxuICAgICAgICB1c2VGYWN0b3J5OiBIdHRwTG9hZGVyRmFjdG9yeSxcclxuICAgICAgICBkZXBzOiBbSHR0cENsaWVudF1cclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIE1lc3NhZ2VTZXJ2aWNlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBGb3JtRHluYW1pY0FuZ3VsYXJDb21wb25lbnRcclxuICBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRm9ybUR5bmFtaWNBbmd1bGFyTW9kdWxlIHsgfVxyXG4iXX0=