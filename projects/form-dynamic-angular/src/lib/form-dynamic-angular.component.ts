import { UntypedFormGroup } from '@angular/forms';
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

export interface IForm {
  label?: string,
  type: "autocomplete" | "button" | "check-box" | "currency" | "date" | "switch" | "list" | "mask" | "number" | "radio-button" | "select" | "select-button" | "table" | "text" | "text-area" | "tree-select" | "multi" | "upload-files" | "password" | "photo"
  disabled?: boolean | null,
  colsTable?: ICols[],
  options?: IOptions[]
  formControl?: string,
  showTime?: boolean,
  clean?: Function, // autocmplete and  treeSelect
  treeSelectOptions?: ITreeSelectOptions[],
  onCLick?: Function,
  onChange?: Function,
  onFocusDate?: Function,
  numberOfMonthsDate?: number;
  class?: string, //button
  rowsTable?: any[],
  rowsFooter?: any[],
  minDate?: Date,
  maxDate?: Date,
  col?: string,
  acceptFiles?: string,
  msgAcceptFiles?: string,
  required?: boolean,
  icon?: string, //button
  placeholder?: string,
  textButton?: string,
  textCheckBox?: string, //?
  mask?: string,
  search?: boolean,
  buttonsTable?: any[],
  scrollHeight?: string, //table
  unmask?: boolean,
  selectionMode?: "multiple" | "range" | "single"
  id?: number | string,
  viewNameFile?: boolean
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
  @Input() control: UntypedFormGroup;

  @Input() buttonsStandard: IButtonsStandard[]
  @Input() buttonsOptional: IButtonsOptional[]

  @Input() files: any[] = [];

  filesView: any[] = [];
  filteredAutoComplete: any[] = [];

  constructor(
    public translate: TranslateService
  ) { }

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

  getUrl(file: File) {
    return window.URL.createObjectURL(file)
  }

  async onSelectFile(fileName: string, event: any) {
    const file = event.target.files
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

  onRemove(event: File) {
    this.filesView.splice(this.filesView.indexOf(event), 1);
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

  cleanAutoComplete(input: string) {
    this.control.controls[input].reset()
  }

}
