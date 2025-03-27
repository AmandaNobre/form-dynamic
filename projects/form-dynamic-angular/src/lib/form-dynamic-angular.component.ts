import { FormBuilder, FormGroup, UntypedFormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
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

export type TTypes =
  "autocomplete" |
  "button" |
  "check-box" |
  "currency" |
  "check-box-multi" |
  "date" |
  "switch" |
  "list" |
  "likert" |
  "mask" |
  "multi" |
  "number" |
  "password" |
  "photo" |
  "radio-button" |
  "select" |
  "select-button" |
  "table" |
  "text" |
  "text-area" |
  "tree-select" |
  "upload-files" |
  "editable-table"
export interface IForm {
  id: number | string,
  label?: string,
  type: TTypes,
  col?: string,
  disabled?: boolean | null,
  formControl?: string,
  required?: boolean,
  placeholder?: string,

  numberOfMonthsDate?: number;
  selectionMode?: "multiple" | "range" | "single"
  minDate?: Date,
  maxDate?: Date,
  viewDate?: 'month' | 'date',
  dateFormat?: string
  timeOnly?: boolean
  showTime?: boolean,

  maxlength?: number,
  rowsTextArea?: number,

  mask?: string,
  unmask?: boolean,

  search?: boolean,
  options?: IOptions[]
  treeSelectOptions?: ITreeSelectOptions[],

  buttonClass?: string,
  iconButton?: string,

  formControlOther?: string,
  hideLabelTop?: boolean,

  scrollHeight?: string,
  colsTable?: ICols[],
  rowsTable?: any[],
  rowsFooter?: any[],
  buttonsTable?: IButtonsTable[],

  acceptFiles?: string,
  msgAcceptFiles?: string,
  viewNameFile?: boolean,
  multileFile?: boolean,

  onChange?: Function,
  onCLick?: Function,
  onCLear?: Function,
  onFocusDate?: Function,
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
  styleClass: string,
  view?: Function;
}

export interface IButtonsTable {
  styleClass: string,
  label: string,
  icon: string,
  onCLick: Function
}
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'form-dynamic-angular',
  templateUrl: 'form-dynamic-angular.component.html',
  styleUrls: ['form-dynamic-angular.component.css']
})

export class FormDynamicAngularComponent implements OnInit {
  @Input() title!: string;
  @Input() subTitle!: string;
  @Input() validateForm: boolean = false;

  @Input() form: IForm[] = []
  @Input() control: FormGroup;

  @Input() buttonsStandard: IButtonsStandard[]
  @Input() buttonsOptional: IButtonsOptional[]

  @Input() files: any[] = [];

  filesView: any[] = [];
  filteredAutoComplete: any[] = [];

  constructor(
    public translate: TranslateService,
    private formBuilder: FormBuilder
  ) {
    this.control = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.files.map(f => {
      this.filesView.push({ ...f, type: f.contentType })
    })

    if (window.location.protocol === "https") {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (mediaStream) {
          const video: HTMLVideoElement | null = document.querySelector('#video');
          if (video) {
            video.srcObject = mediaStream;
            video.play();
          }
        })
        .catch(function (err) { })
    }
  }

  numberOfMonthsDate(numberOfMonthsDate: number) {
    return numberOfMonthsDate ?? 1
  }

  selectionMode(selectionMode: string) {
    return selectionMode ?? "single"
  }

  async capturePhoto(fileName: string) {
    const canvas: HTMLCanvasElement | null = document.querySelector("#canvas");
    const icon: HTMLButtonElement | null = document.querySelector("#icon-remove");
    const video: HTMLVideoElement | null = document.querySelector('#video');
    const button: HTMLButtonElement | null = document.querySelector('#button');


    if (canvas && video) {
      canvas.height = video.videoHeight;
      canvas.width = video.videoWidth;
      const context = canvas.getContext('2d');
      if (context && icon && button) {
        context.drawImage(video, 0, 0)
        video.style.display = "none"
        button.disabled = true
        canvas.style.display = "block"
        icon.style.visibility = "visible"

        let aux = {
          name: "photo user",
          contentType: "image/png",
          content: canvas.toDataURL("image/png")
        };

        this.control.get(fileName)?.setValue(aux);
      }
    }
  }

  removePhoto() {
    const canvas: HTMLCanvasElement | null = document.querySelector("#canvas");
    const icon: HTMLButtonElement | null = document.querySelector("#icon-remove");
    const video: HTMLVideoElement | null = document.querySelector('#video');
    const button: HTMLButtonElement | null = document.querySelector('#button');

    if (canvas && video) {
      const context = canvas.getContext('2d');
      if (context && icon && button) {
        video.style.display = "block"
        button.disabled = false
        canvas.style.display = "none"
        icon.style.visibility = "collapse"
      }
    }
  }

  getUrl(file: File) {
    return window.URL.createObjectURL(file)
  }

  async onSelectFile(fileName: string, event: any, multiple: boolean) {
    const file = event.target.files
    // if (!multiple) {
    //   this.filesView = [];
    // }
    this.filesView.push(...file);

    const newFIles = file
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

  onRemove(event: File, fileName: string) {
    this.filesView.splice(this.filesView.indexOf(event), 1);
    var input = document.getElementById('fileInput') as HTMLInputElement
    if (input) {
      input.value = ''
    }
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

  onChange(change?: Function) {
    if (change) {
      change()
    }
  }

  clickCLear(clear?: Function) {
    if (clear) {
      clear()
    }
  }

  onBlur(blur?: Function) {
    if (blur) {
      blur()
    }
  }
}
