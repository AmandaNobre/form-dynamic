import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormControl, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

// import { IForm, IList } from 'form-dynamic-angular';
import { IButtonsOptional, IButtonsStandard, ICols, IForm, IList, IOptions, ITable, ITreeSelectOptions } from 'projects/form-dynamic-angular/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent implements OnInit {
  controlExemple: UntypedFormGroup
  formmExemple: IForm[] = []

  table: any = [{
    id: 1,
    c1: "teste c1",
    c2: "teste c2",
    button: { label: "as", icon: "a", onCLick: (id: number) => this.click(id), styleClass: "asd" }
  },
  {
    id: 2,
    c1: "asas",
    c2: "ad",
    button: { label: "ab", icon: "a", onCLick: (id: number) => this.click(id), styleClass: "asd" }
  }]

  cols: ICols[] = [
    { field: 'c1', header: 'C1' },
    { field: 'c2', header: 'C2' },
    { field: 'button', header: 'Ação' },


  ]

  buttonsOptional: IButtonsOptional[] = [
    { label: "Aceitar", icon: "pi pi-times", onCLick: (id: number) => this.click(id), styleClass: "p-button-danger" }
  ]

  controlAutocomplete: UntypedFormGroup
  formmAutocomplete: IForm[] = []

  options: IOptions[] = [
    { id: 1, descricao: "Fortaleza" },
    { id: 2, descricao: "Maracanaú" }
  ]

  treeSelect: ITreeSelectOptions[] = [{
    key: '0',
    label: 'Documents',
    icon: 'pi pi-fw pi-inbox',
    children: [
      {
        key: '0-0',
        label: 'Work',
        icon: 'pi pi-fw pi-cog',
        children: [
          { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file' },
          { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', }
        ]
      },
      {
        key: '0-1',
        label: 'Home',
        icon: 'pi pi-fw pi-home'
      }
    ]
  }]

  constructor(
    private fb: UntypedFormBuilder,
  ) { }

  ngOnInit() {
    this.controlExemple = this.fb.group({
      user: new FormControl({ value: '', disabled: true }),
      password: ''
    });

    this.formmExemple = [
      // { label: 'User', col: 'col-lg-6', type: 'upload-files', formControl: 'user' },
      // { label: 'Password', col: 'col-lg-6', type: 'list', formControl: 'password', disabled: false }
    ]


    this.controlAutocomplete = this.fb.group({
      a: new FormControl<IOptions[] | null>([]),
      cities: new FormControl('', Validators.required),
      button: '',
      ckech: false,
      date: '',
      date1: '',
      date2: '',
      switch: false,
      number: 0,
      selectButton: "1",
      installationLocation: ''
    });

    this.formmAutocomplete = [
      // { label: 'Cities', col: 'col-lg-12', type: 'table', formControl: 'a', rowsTable: this.table, colsTable: this.cols, class: 'p-datatable-gridlines' },
      // { label: 'Cities', col: 'col-md-4', type: 'upload-files', formControl: 'cities', acceptFiles: 'image/*', msgAcceptFiles:"Arquivos suportados: PNG, TIF, JPG, PDF, WORD e EXCEL" },
      { label: 'Cities', col: 'col-md-4', type: 'text', formControl: 'a', options: this.options, required: true },
      { label: 'Cities', col: 'col-md-4', type: 'text', formControl: 'cities', options: this.options, required: true },
      // { label: 'Cities', col: 'col-lg-6', type: 'select', formControl: 'cities', options: this.options },
      // { label: 'Cities', col: 'col-lg-6', type: 'select-button', formControl: 'selectButton', options: this.options },
      // { label: 'Cities', col: 'col-lg-6', type: 'table', formControl: 'selectButton', options: this.options },
      // { label: 'Ver cidade', col: 'col-lg-4', type: 'button', onCLick: this.click },
      // { label: 'Ckeck', col: 'col-lg-6', type: 'check-box', formControl: 'ckech' },
      // { label: 'Date', col: 'col-lg-6', type: 'date', formControl: 'date' },
      // { label: 'Date', col: 'col-lg-6', type: 'date', formControl: 'date1', datePeriod: true, formControlSecondary: "date2" },
      // { label: 'Date', col: 'col-lg-6', type: 'date-time', formControl: 'date1' },
      { label: 'Switch', col: 'col-lg-6', type: 'switch', formControl: 'switch' },
      // { label: 'text', col: 'col-lg-6', type: 'text', formControl: 'date2' },
      // { label: 'Number', col: 'col-lg-6', type: 'number', formControl: 'number' },
      // { label: 'TextArea', col: 'col-lg-6', type: 'text-area', formControl: 'number' },
      // { label: "pageRequests.installationLocation", col: 'col-lg-6', type: 'tree-select', formControl: 'installationLocation', treeSelectOptions: this.treeSelect },

    ]
  }

  chageValues(){
    console.log("s")
  }

  click(id: number) {
    console.log(this.controlAutocomplete)
  }
}
