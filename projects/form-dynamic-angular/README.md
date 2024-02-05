# FORM DYNAMIC ANGULAR

![Version](https://img.shields.io/npm/v/form-dynamic-angular.svg ) 

## Description
The form-dynamic is a solution whith objectve is minimize the coding in forms, so one json you can have mutch components in forms in primeng as: input (text and number),  select, treeSelect, autocomplete, date, dateTime, textarea, checkbox, button, upload files, list e radioButton


| Lib version | Angular version     
| :-------- | :------- 
| `4.1.3` | `15.2.0` 
| `5.0.6` | `17.0.0`   

## Basic Usage 📑
```html

<form-dynamic-angular title="Exemple" [form]=formmExemple [control]=controlExemple></form-dynamic-angular>

```

```js

import { TranslateService } from '@ngx-translate/core';
import { UntypedFormBuilder } from '@angular/forms';
import { IForm } from 'form-dynamic-angular';

export class AppComponent implements OnInit {

  controlExemple: UntypedFormGroup 
  formmExemple: IForm[] = []

  constructor(
    private translate: TranslateService,
    private fb: UntypedFormBuilder,
  ) {}

   ngOnInit() {
    this.controlExemple = this.fb.group({
      user: '',
      password: ''
    });

    this.formmExemple = [
      { label: 'User', col: 'col-lg-6', type: 'text', formControl: 'user' },
      { label: 'Password', col: 'col-lg-6', type: 'text', formControl: 'password' }
    ]
  }
}

```

## Props 💬

| Prop  | Type  | Default | Description |
|:--------- | :---- | :----   |:----  | 
| `title` | `string` | `''` | Title page
| `sigle` | `string` | `''` | Sigle page
| `description` | `string` | `''` | Description page
| `control` | `UntypedFormGroup` | `undefined` | Controls the form
| `form` | `IForm[]` | `[]` | Input list
| `files` | `File[]` | `[]` | Upload files
| `onChange` | `Function` | `` | Change inputs
| `validateForm` | `boolean` | `false` | if inputs have validation
| `buttonsStandard` | `IButtonsStandard[]` | `[]` | Inputs standard (clean, filter, save, cancel)
| `buttonsOptional` | `IButtonsOptional[]` | `[]` | Inputs optional

## Usage Inputs

1- Autocomplete | List | Radio-button | Select | Select-button | Multi

```js

import {IOptions } from 'form-dynamic-angular';

controlAutocomplete: UntypedFormGroup
formmAutocomplete: IForm[] = []

options: IOptions[] = [
    { id: 1, descricao: "Fortaleza" },
    { id: 2, descricao: "Maracanaú" }
  ]

this.controlAutocomplete = this.fb.group({
  cities: '',
});

this.formmAutocomplete = [
  { label: 'Cities', col: 'col-lg-6', type: 'autocomplete', formControl: 'cities', options: this.options },
  { label: 'Cities', col: 'col-lg-6', type: 'list', formControl: 'cities', options: this.options },
  { label: 'Cities', col: 'col-lg-6', type: 'radio-button', formControl: 'cities', options: this.options },
  { label: 'Cities', col: 'col-lg-6', type: 'select', formControl: 'cities', options: this.options },
  { label: 'Cities', col: 'col-lg-6', type: 'select-button', formControl: 'cities', options: this.options },
  { label: 'Cities', col: 'col-lg-6', type: 'multi', formControl: 'cities', options: this.options },
]

```

2- Button

```js

controlAutocomplete: UntypedFormGroup
formmAutocomplete: IForm[] = []

this.controlAutocomplete = this.fb.group({});

this.formmAutocomplete = [
 { textButton: 'Ver cidade', col: 'col-lg-4', type: 'button',  onCLick: this.click(), icon: 'pi pi-plus', class: 'p-button-outlined' }
]

click() {
  console.log("click button")
}

```

2- Check-box

```js

controlAutocomplete: UntypedFormGroup
formmAutocomplete: IForm[] = []

this.controlAutocomplete = this.fb.group({});

this.formmAutocomplete = [
  { label: 'Ckeck', col: 'col-lg-6', type: 'check-box', formControl: 'ckech' },
]

```

3- Date | Date period | Date Time

```js

controlAutocomplete: UntypedFormGroup
formmAutocomplete: IForm[] = []

this.controlAutocomplete = this.fb.group({
  date: '',
  startDate: '',
  endDate: '',
  dateTime: ''
});

this.formmAutocomplete = [
  { label: 'Date', col: 'col-lg-6', type: 'date', formControl: 'date' },
  { label: 'Date', col: 'col-lg-6', type: 'date', formControl: 'startDate', datePeriod: true, formControlSecondary: "endDate" },
  { label: 'Date', col: 'col-lg-6', type: 'date-time', formControl: 'dateTime' }
    
]

```

4- Switch |  Text | Text-area | Number | Password

```js

controlAutocomplete: UntypedFormGroup
formmAutocomplete: IForm[] = []

this.controlAutocomplete = this.fb.group({
  switch: false,
  text: '',
  number: 0,
  textArea: '',
  password: ''
});

this.formmAutocomplete = [
  { label: 'Switch', col: 'col-lg-6', type: 'switch', formControl: 'switch' },
  { label: 'Text', col: 'col-lg-6', type: 'text', formControl: 'text' },
  { label: 'Number', col: 'col-lg-6', type: 'number', formControl: 'number' },
  { label: 'TextArea', col: 'col-lg-6', type: 'text-area', formControl: 'textArea' },
  { label: 'Password', col: 'col-lg-6', type: 'password', formControl: 'password' }
]

```

5- Tree-select

```js

import { ITreeSelectOptions } from 'projects/form-dynamic-angular/src/public-api';

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

control: UntypedFormGroup
form: IForm[] = []

this.control = this.fb.group({
  treeSelect: ""
});

this.form = [
  { label: "Tree-select", col: 'col-lg-6', type: 'tree-select', formControl: 'installationLocation', treeSelectOptions: this.treeSelect },
]

```

6- Table

```js

import { ICols } from 'projects/form-dynamic-angular/src/public-api';

rowsTable: any = [{
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

control: UntypedFormGroup
form: IForm[] = []

this.control = this.fb.group({
  table: ""
});

this.form = [
  { label: 'Cities', col: 'col-lg-12', type: 'table', formControl: 'table', rowsTable: this.rowsTable, colsTable: this.cols, class: 'p-datatable-gridlines' }
]

```

7- Upload-files

```js

control: UntypedFormGroup
form: IForm[] = []

this.control = this.fb.group({
  table: ""
});

this.form = [
  { type: 'upload-files', formControl: 'cities', acceptFiles: 'image/*, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/pdf, application/msword', msgAcceptFiles:"Arquivos suportados: PNG, TIF, JPG, PDF, WORD e EXCEL" }

]

```

## Translate

Created files

```json
//src/assets/i18n/pt.json

{
  "pageLogin": {
        "userName": "Usuário",
        "password": "Senha"
    }
}

//src/assets/i18n/en.json

{
  "pageLogin": {
        "userName": "Username",
        "password": "Password"
    }
}

```

Created input and form

```html
<!--app.component.html-->

<select (change)="uselanguage($event.target.value)">
    <option value='pt'>pt</option>
    <option value='en'>en</option>
</select>

<form-dynamic-angular title="Login" [form]=formLogin [control]=controlLogin></form-dynamic-angular>

```

Created function

```js
//app.component.ts

import { TranslateService } from '@ngx-translate/core';
import { UntypedFormBuilder } from '@angular/forms';
import { IForm } from 'form-dynamic-angular';


export class AppComponent implements OnInit {

  controlmitigationBarriers: UntypedFormGroup 
  formLogin: IForm[] = []

  constructor(
    private translate: TranslateService,
    private fb: UntypedFormBuilder,
  ) {}

  ngOnInit() {
    this.controlmitigationBarriers  = this.fb.group({
      username: '',
      password: ''
    });

    this.formLogin = [
      { label: 'pageLogin.userName', col: 'col-lg-6', type: 'text', formControl: 'username' },
      { label: 'pageLogin.password', col: 'col-lg-6', type: 'text', formControl: 'password' }
    ]
  }

  uselanguage(language: string) {
    this.translate.use(language);
  }
}

```
