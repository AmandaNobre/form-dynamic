import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

// import { IForm, IList } from 'form-dynamic-angular';
import { IButtonsOptional, IButtonsStandard, ICols, IForm, IOptions, ITreeSelectOptions } from 'projects/form-dynamic-angular/src/public-api';

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
    { field: 'itemName', header: 'Item' },
    { field: 'valueUnit', header: 'Valor Unitário' },
    { field: 'qtd', header: 'Quantidade' },
    { field: 'value', header: 'Valor Total' }
  ]

  buttonsStandard: IButtonsStandard[] = [
    { type: 'cancel', onCLick: (id: number) => this.click(id), styleClass: "p-button-outlined" },
    { type: 'save', onCLick: (id: number) => this.click(id), styleClass: 'p-button-outlined' }
  ]

  buttonsOptional: IButtonsOptional[] = [
    { label: "Aceitar", icon: "pi pi-times", onCLick: (id: number) => this.click(id), styleClass: "p-button-danger" }
  ]

  controlAutocomplete: UntypedFormGroup
  formmAutocomplete: IForm[] = []

  options: IOptions[] = [
    { code: 1, description: "Fortaleza" },
    { code: 2, description: "Maracanaú" }
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
    private httpClient: HttpClient
  ) { }

  validateForm: boolean = false

  ngOnInit() {
    this.controlExemple = this.fb.group({
      user: new FormControl({ value: '', disabled: true }),
      password: ''
    });

    this.formmExemple = [
      // { label: 'User', col: 'col-lg-6', type: 'upload-files', formControl: 'user' },
      // { label: 'Password', col: 'col-lg-6', type: 'list', formControl: 'password', disabled: false }
    ]


    this.controlAutocomplete
      // = this.fb.group({
      //   user: '',
      //   situation: new FormControl({ value: true, disabled: false })
      // });
      = this.fb.group({
        // a: new FormControl<IOptions[] | null>([]),
        cities: new FormControl({ value: "", disabled: true }, { validators: [Validators.email, Validators.required] }),
        // button: '',
        // ckech: false,
        // date: new FormControl({ value: "", disabled: false }, { validators: Validators.required }),
        // date1: new FormControl({ value: "", disabled: false }, { validators: Validators.required }),
        // date2: new FormControl({ value: "", disabled: false }, { validators: Validators.required }),
        // switch: new FormControl({ value: false, disabled: false }, { validators: Validators.required }),
        // number: 0,
        // selectButton: "1",
        // installationLocation: ''
      });

    this.formmAutocomplete = [
      // { label: 'Cities', col: 'col-lg-12', type: 'table', formControl: 'a', rowsTable: this.table, colsTable: this.cols, class: 'p-datatable-gridlines' },
      // { label: 'Cities', col: 'col-md-4', type: 'upload-files', formControl: 'cities', acceptFiles: 'image/*', msgAcceptFiles: "Arquivos suportados: PNG, TIF, JPG, PDF, WORD e EXCEL" },
      // { label: 'Cities', col: 'col-md-3', type: 'currency', formControl: 'cities', options: this.options, required: true, disabled: true },
      { label: 'Cities', col: 'col-md-2', type: 'upload-files', mask: "999-999-9999", formControl: 'cities', options: this.options, required: true, acceptFiles: "image/*" },
      // { label: 'Cities', col: 'col-md-2', type: 'radio-button', formControl: 'cities', options: this.options, required: true, onChange: () => this.chageValues()  },
      // { label: 'Cities', col: 'col-md-2', type: 'multi', formControl: 'cities', options: this.options, required: true, onChange: () => this.chageValues() },
      // { label: 'Adicionar', col: 'col-md-2', type: 'button', class: "mt-3 p-button-outlined" },
      // { label: 'Cities', col: 'col-md-2', type: 'select', formControl: 'cities', options: this.options },
      // { label: 'Date', col: 'col-md-2', type: 'date', formControl: 'date' },
      // { label: 'autocomplete', col: 'col-md-2', type: 'radio-button', formControl: 'cities', options: this.options },
      // { label: 'Ver cidade', col: 'col-lg-4', type: 'button', onCLick: this.click },
      // { label: 'Ckeck', col: 'col-md-2', type: 'check-box', formControl: 'cities' },
      // { label: 'Date', col: 'col-md-2', type: 'date', formControl: 'date1', datePeriod: true, formControlSecondary: "date2" },
      // { label: 'Date', col: 'col-md-2', type: 'date-time', formControl: 'date1' },
      // { label: 'Switch', col: 'col-md-2', type: 'switch', formControl: 'switch' },
      // { label: "pageRequests.installationLocation", col: 'col-md-2', type: 'tree-select', formControl: 'installationLocation', treeSelectOptions: this.treeSelect },
      // { label: 'Number', col: 'col-md-2', type: 'number', formControl: 'cities' },
      // { label: 'TextArea', col: 'col-md-2', type: 'text-area', formControl: 'number' },

      // { label: 'Descrição', col: 'col-lg-12', type: 'text', formControl: 'user' },
      // { label: 'Situação', col: 'col-lg-2', type: 'radio-button', options: [{ id: 'active', descricao: "Ativo" }, { id: 'inactive', descricao: "Inativo" }], formControl: 'situation' },
      // { textCheckBox: 'Possui antendimento prioritário para idosos acima de 80 anos?', disabled: true, col: 'col-lg-6', type: 'check-box', formControl: 'situation' }

    ]
}

chageValues() {
}

click(id: number) {
  this.validateForm = true
}
}
