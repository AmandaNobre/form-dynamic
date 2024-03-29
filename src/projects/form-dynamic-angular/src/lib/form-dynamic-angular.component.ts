import { UntypedFormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import * as moment from 'moment';
import { MessageService } from 'primeng/api';

export interface ITreeSelectOptions {
  key: string,
  label: string,
  icon: string,
  children?: ITreeSelectOptions[]
}


export interface IOptions {
  description: string,
  code: number | string
}

export interface ICols {
  field: string,
  header: string
}

export interface IForm {
  label?: string,
  secondLabel?: string,
  type?: "autocomplete" | "button" | "check-box" | "currency" | "date" | "date-time" | "switch" | "list" | "mask" | "number" | "radio-button" | "select" | "select-button" | "table" | "text" | "text-area" | "tree-select" | "multi" | "upload-files" | "password",
  disabled?: boolean | null,
  colsTable?: ICols[],
  options?: IOptions[]
  datePeriod?: boolean
  formControl?: string,
  clean?: Function,
  formControlSecondary?: string,
  treeSelectOptions?: ITreeSelectOptions[],
  forceSelection?: boolean,
  onCLick?: Function,
  onChange?: Function,
  class?: string,
  rowsTable?: any[],
  minDate?: Date,
  maxDate?: Date,
  col?: string,
  acceptFiles?: string,
  msgAcceptFiles?: string,
  required?: boolean,
  icon?: string,
  placeholder?: string,
  textButton?: string,
  textCheckBox?: string,
  mask?: string
}


export interface IButtonsStandard {
  type: 'clean' | 'filter' | 'save' | 'cancel',
  onCLick: Function,
  styleClass?: string
}

export interface IButtonsOptional {
  label: string,
  onCLick: Function,
  icon: string,
  styleClass: string
}

@Component({
  selector: 'form-dynamic-angular',
  templateUrl: 'form-dynamic-angular.component.html',
  styleUrls: ['form-dynamic-angular.component.css']
})


export class FormDynamicAngularComponent {
  @Input() title!: string;
  @Input() sigle!: string;
  @Input() description!: string;
  @Input() validateForm: boolean = false;

  @Input() form: IForm[] = []
  @Input() control: UntypedFormGroup;

  @Input() buttonsStandard: IButtonsStandard[]
  @Input() buttonsOptional: IButtonsOptional[]

  @Input() files: File[] = [];

  filesDonwload: File[] = [];

  filteredAutoComplete: any[] = [];
  maxDate: Date
  minDate: Date
  minDateAll: Date;

  constructor(
    public translate: TranslateService,
    private messageService: MessageService
  ) {

  }

  dowloadFIle(event: any, file: any) {
    event.stopPropagation()

    // this.attachmentsService.download(file.id).subscribe(data => {
    //   const blob = window.URL.createObjectURL(new Blob([data]));
    //   const anchorEl = document.createElement("a");
    //   anchorEl.href = blob;
    //   anchorEl.setAttribute("download", file.name);
    //   anchorEl.click();
    // })
  }

  onFocusDate(date: Date) {
    this.minDate = moment(date).toDate()
    this.maxDate = moment(date).add(6, 'month').toDate();
  }

  async onSelect(fileName: string, event: { addedFiles: any; }) {
    this.filesDonwload.push(...event.addedFiles);
    const newFIles = event.addedFiles
    let arr = [];
    for (const item of newFIles) {
      let aux = {
        name: item.name,
        contentType: item?.type,
        content: await this.toBase64(item)
      };
      arr.push(aux);
    }

    this.control.get(fileName)?.setValue(arr);
  }

  onRemove(event: File) {
    this.filesDonwload.splice(this.filesDonwload.indexOf(event), 1);
  }

  filterAutoComplete(event: { query: any; }, suggestionsAutoComplete: any) {
    let filtered: any[] = [];
    let query = event.query;

    if (suggestionsAutoComplete) {
      for (let i = 0; i < suggestionsAutoComplete.length; i++) {
        let dados = suggestionsAutoComplete[i];
        if (dados.description.toLowerCase().normalize('NFD').replace(/\p{M}/ug, '').indexOf(query.toLowerCase().normalize('NFD').replace(/\p{M}/ug, '')) != -1) {
          filtered.push(dados);
        }
      }

      this.filteredAutoComplete = filtered;
    }
  }

  toBase64 = async (file: File) => {
    return new Promise((resolve, _) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(file);
    });
  }

  onBlurDate(event: any) {
    if (event.target.value) {
      if (!moment(event.target.value, "DD/MM/yyyy HH:mm", true).isValid() && !moment(event.target.value, "DD/MM/yyyy", true).isValid()) {
        this.messageService.add({ severity: 'error', summary: this.translate.instant('globals.invalidDate'), detail: this.translate.instant('globals.invalidDateMessage') })
      }
    }
  }

  onChange(change?: Function) {
    if (change) {
      change()
    }
  }
}
