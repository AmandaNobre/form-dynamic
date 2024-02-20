import { UntypedFormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import * as i0 from "@angular/core";
export interface ITreeSelectOptions {
    key: string;
    label: string;
    icon: string;
    children?: ITreeSelectOptions[];
}
export interface IOptions {
    description: string;
    code: number | string;
}
export interface ICols {
    field: string;
    header: string;
}
export interface IForm {
    label?: string;
    secondLabel?: string;
    type?: "autocomplete" | "button" | "check-box" | "currency" | "date" | "date-time" | "switch" | "list" | "mask" | "number" | "radio-button" | "select" | "select-button" | "table" | "text" | "text-area" | "tree-select" | "multi" | "upload-files" | "password";
    disabled?: boolean | null;
    colsTable?: ICols[];
    options?: IOptions[];
    datePeriod?: boolean;
    formControl?: string;
    clean?: Function;
    formControlSecondary?: string;
    treeSelectOptions?: ITreeSelectOptions[];
    forceSelection?: boolean;
    onCLick?: Function;
    onChange?: Function;
    class?: string;
    rowsTable?: any[];
    minDate?: Date;
    maxDate?: Date;
    col?: string;
    acceptFiles?: string;
    msgAcceptFiles?: string;
    required?: boolean;
    icon?: string;
    placeholder?: string;
    textButton?: string;
    textCheckBox?: string;
    mask?: string;
}
export interface IButtonsStandard {
    type: 'clean' | 'filter' | 'save' | 'cancel';
    onCLick: Function;
    styleClass?: string;
}
export interface IButtonsOptional {
    label: string;
    onCLick: Function;
    icon: string;
    styleClass: string;
}
export declare class FormDynamicAngularComponent {
    translate: TranslateService;
    private messageService;
    title: string;
    sigle: string;
    description: string;
    validateForm: boolean;
    form: IForm[];
    control: UntypedFormGroup;
    buttonsStandard: IButtonsStandard[];
    buttonsOptional: IButtonsOptional[];
    files: File[];
    filesDonwload: File[];
    filteredAutoComplete: any[];
    maxDate: Date;
    minDate: Date;
    minDateAll: Date;
    constructor(translate: TranslateService, messageService: MessageService);
    dowloadFIle(event: any, file: any): void;
    onFocusDate(date: Date): void;
    onSelect(fileName: string, event: {
        addedFiles: any;
    }): Promise<void>;
    onRemove(event: File): void;
    filterAutoComplete(event: {
        query: any;
    }, suggestionsAutoComplete: any): void;
    toBase64: (file: File) => Promise<unknown>;
    onBlurDate(event: any): void;
    onChange(change?: Function): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormDynamicAngularComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormDynamicAngularComponent, "form-dynamic-angular", never, { "title": "title"; "sigle": "sigle"; "description": "description"; "validateForm": "validateForm"; "form": "form"; "control": "control"; "buttonsStandard": "buttonsStandard"; "buttonsOptional": "buttonsOptional"; "files": "files"; }, {}, never, never, false, never>;
}
