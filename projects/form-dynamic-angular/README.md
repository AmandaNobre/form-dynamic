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
import { UntypedFormBuilder } from '@angular/forms';
import { IForm } from 'form-dynamic-angular';

export class AppComponent implements OnInit {

  controlExemple: UntypedFormGroup 
  formmExemple: IForm[] = []

  constructor(
    private fb: UntypedFormBuilder
  ) {}

   ngOnInit() {
    this.controlExemple = this.fb.group({
      user: '',
      password: ''
    });

    this.formmExemple = [
      { label: 'User', col: 'lg:col-6', type: 'text', formControl: 'user' },
      { label: 'Password', col: 'lg:col-6', type: 'text', formControl: 'password' }
    ]
  }
}

```

## Props 💬

| Prop  | Type  | Default | Description |
|:--------- | :---- | :----   |:----  | 
| `title` | `string` | `''` | Title page
| `subTitle` | `string` | `''` | Sub title page
| `control` | `UntypedFormGroup` | `undefined` | Controls the form
| `form` | `IForm[]` | `[]` | Input list
| `files` | `File[]` | `[]` | Upload files
| `validateForm` | `boolean` | `false` | if inputs have validation
| `buttonsStandard` | `IButtonsStandard[]` | `[]` | Inputs standard (clean, filter, save, cancel)
| `buttonsOptional` | `IButtonsOptional[]` | `[]` | Inputs optional


## Props Inputs 💬

| Prop  | Type  | Required |type input | Description |
|:--------- | :---- | :----   |:----  | :----  |
| `id` | `string or number` | `yes` | `all` | Id unic
| `label` | `string` | `no` | `all` | Label
| `type` | ` autocomplete or button or check-box or currency or check-box-multi or date or switch or list or likert or mask or multi or number or password or photo or radio-button or select or select-button or table or text or text-area or tree-select or upload-files` | `yes` | `all` | Type
| `disabled` | `boolean or null` | `no` | `button or upload-files` | Disabled
| `col` | `string` | `no` | `all` | Class grid primeflex
| `formControl` | ` string` | `no` | `all` | Controler input
| `required` | `boolean` | `no` | `all` | If input is required
| `placeholder` | `string` | `no` | `all` | Placeholder
| `onChange` | `Function` | `no` | `all` | Change
| `search` | `boolean` | `no` | `select` | If input search
| `options` | ` IOptions[]` | `no` | `select or autocomplete or list or multi or radio-button or checkbox-multiple or select-button` | Options view
| `treeSelectOptions` | ` ITreeSelectOptions[]` | `no` | `tree-select` | Options tree select
| `numberOfMonthsDate` | ` number` | `no` | `date` | Quantity months views, default 1
| `selectionMode` | ` multiple or range or single` | `no` | `date` | Mode selection dates
| `minDate` | `Date` | `no` | `date` | Min Date
| `maxDate` | `Date` | `no` | `date` | Max Date
| `viewDate` | `month or date` | `no` | `date` | View only month or date
| `dateFormat` | `string` | `no` | `date` | Format date
| `timeOnly` | `boolean` | `no` | `date` | View only time
| `showTime` | ` boolean` | `no` | `date` | if view time in date
| `rowsTextArea` | ` number` | `no` | `text-area` | Quantity rows in text-area
| `maxlength` | ` number` | `no` | `text-area` | Count words

| `colsTable` | ` ICols[]` | `no` | `table` | Cols table
| `forceSelection` | ` ICols[]` | `no` | `table` | Cols table
| `clean` | `Function` | `no` | `tree-select` | Function clear 
| `onCLick` | `Function` | `no` | `button` | Function clear 
| `icon` | `string` | `no` | `button` | Icon Button 
| `textButton` | `string` | `no` | `button` | Text Button 
| `onFocusDate` | `Function` | `no` | `date` | Functions focus 
| `onFocusDate` | `Function` | `no` | `date` | Functions focus 
| `selectionMode` | `multiple or range or single` | `no` | `date` | Amount month is view in date
| `acceptFiles` | `string` | `no` | `upload-files` | Formats accepts
| `msgAcceptFiles` | `string` | `no` | `upload-files` | Message accepts
| `mask` | `string` | `no` | `mask` | type mask
| `unmask` | `boolean` | `no` | `mask` | If control user mask or no


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
  { label: 'Cities', col: 'lg:col-6', type: 'autocomplete', formControl: 'cities', options: this.options },
  { label: 'Cities', col: 'lg:col-6', type: 'list', formControl: 'cities', options: this.options },
  { label: 'Cities', col: 'lg:col-6', type: 'radio-button', formControl: 'cities', options: this.options },
  { label: 'Cities', col: 'lg:col-6', type: 'select', formControl: 'cities', options: this.options },
  { label: 'Cities', col: 'lg:col-6', type: 'select-button', formControl: 'cities', options: this.options },
  { label: 'Cities', col: 'lg:col-6', type: 'multi', formControl: 'cities', options: this.options },
]

```

2- Button

```js

controlAutocomplete: UntypedFormGroup
formmAutocomplete: IForm[] = []

this.controlAutocomplete = this.fb.group({});

this.formmAutocomplete = [
 { textButton: 'Ver cidade', col: 'col-lg-4', type: 'button',  onCLick: () => this.click(), icon: 'pi pi-plus', class: 'p-button-outlined' }
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
  { label: 'Ckeck', col: 'lg:col-6', type: 'check-box', formControl: 'ckech' },
]

```

3- Date 

```js

controlAutocomplete: UntypedFormGroup
formmAutocomplete: IForm[] = []

this.controlAutocomplete = this.fb.group({
  date: ''
});

this.formmAutocomplete = [
  { label: 'Date', col: 'lg:col-6', type: 'date', formControl: 'date' },
]

```

4- Switch |  Text | Text-area | Number | Password | Currency

```js

controlAutocomplete: UntypedFormGroup
formmAutocomplete: IForm[] = []

this.controlAutocomplete = this.fb.group({
  switch: false,
  text: '',
  number: 0,
  textArea: '',
  password: '',
  currency: 0
});

this.formmAutocomplete = [
  { label: 'Switch', col: 'lg:col-6', type: 'switch', formControl: 'switch' },
  { label: 'Text', col: 'lg:col-6', type: 'text', formControl: 'text' },
  { label: 'Number', col: 'lg:col-6', type: 'number', formControl: 'number' },
  { label: 'TextArea', col: 'lg:col-6', type: 'text-area', formControl: 'textArea' },
  { label: 'Password', col: 'lg:col-6', type: 'password', formControl: 'password' },
  { label: 'Currency', col: 'lg:col-6', type: 'currency', formControl: 'currency' }
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
  { label: "Tree-select", col: 'lg:col-6', type: 'tree-select', formControl: 'installationLocation', treeSelectOptions: this.treeSelect },
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

8- Mask

```js

control: UntypedFormGroup
form: IForm[] = []

this.control = this.fb.group({
  mask: 0
});

this.form = [
  { label: 'Mask', col: 'col-md-12', type: 'mask', mask: "999-999-9999", formControl: 'mask' }
]

```
## Required

```js

control: UntypedFormGroup
form: IForm[] = []
validateForm: boolean = false

buttonsStandard: IButtonsStandard[] = [
    { type: 'save', onCLick: () => this.save(), styleClass: 'p-button-outlined' }
]

this.control = this.fb.group({
  mask: new FormControl({ value: 0, validators: Validators.required}),
});

this.form = [
  { label: 'Mask', col: 'col-md-12', type: 'mask', mask: "999-999-9999", formControl: 'mask', required: true }
]

save() {
  this.validateForm = true
}
 
```
```html

<form-dynamic-angular title="Exemple" [form]=form [control]=control [validateForm]=validateForm  [buttonsStandard]=buttonsStandard></form-dynamic-angular>

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

<form-dynamic-angular title="Login" [form]=formLogin [control]=controlLogin></form-dynamic-angular>

```

Created function

```js
//app.component.ts

import { UntypedFormBuilder } from '@angular/forms';
import { IForm } from 'form-dynamic-angular';


export class AppComponent implements OnInit {

  controlLogin: UntypedFormGroup 
  formLogin: IForm[] = []

  constructor(
    private fb: UntypedFormBuilder
  ) {}

  ngOnInit() {
    this.controlLogin  = this.fb.group({
      username: '',
      password: ''
    });

    this.formLogin = [
      { label: 'userName', col: 'lg:col-6', type: 'text', formControl: 'username' },
      { label: 'password', col: 'lg:col-6', type: 'text', formControl: 'password' }
    ]
  }

}

```
