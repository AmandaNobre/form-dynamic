# FORM DYNAMIC ANGULAR

![Version](https://img.shields.io/npm/v/form-dynamic-angular.svg ) 

## Description
The form-dynamic is a solution whith objectve is minimize the coding in forms, so one json you can have mutch components in forms in primeng as: input (text and number),  select, treeSelect, autocomplete, date, dateTime, textarea, checkbox, button, upload files, list e radioButton


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
    this.controlExemple  = this.fb.group({
      requester: '',
      manager: ''
    });

    this.formmExemple =  [
        { label: 'Requester', col: 'col-lg-6', type: 'text', formControl: 'requester'},
        { label: 'Manager', col: 'col-lg-6', type: 'text', formControl: 'manager' }
    ]
  }
}

```

## Props 💬

| Prop  | Type  | Default | Description |
|:--------- | :---- | :----   |:----  | 
| `title` | `string` | `''` | Title page
| `filter` | `function` | `func` | Callback function actived when click button filter
| `clean` | `function` | `func` | Callback function actived when click button clean
| `onChange` | `function` | `func` | Callback function actived when change input
| `viewFIlter` | `boolean` | `false` | If the button filter is wiew
| `viewClean` | `boolean` | `false` | If the button clean is wiew
| `files` | `File[]` | `[]` | Upload files
| `control` | `UntypedFormGroup` | `undefined` | Controls the form
| `form` | `IForm[]` | `[]` | Input list

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

<form-dynamic-angular title="Login" [form]=formmLogin [control]=controlLogin></form-dynamic-angular>

```

Created function

```js
//app.component.ts

import { TranslateService } from '@ngx-translate/core';
import { UntypedFormBuilder } from '@angular/forms';
import { IForm } from 'form-dynamic-angular';


export class AppComponent implements OnInit {

  controlmitigationBarriers: UntypedFormGroup 
  formmLogin: IForm[] = []

  constructor(
    private translate: TranslateService,
    private fb: UntypedFormBuilder,
  ) {}

  ngOnInit() {
    this.controlmitigationBarriers  = this.fb.group({
      username: '',
      password: ''
    });

    this.formmLogin = [
      { label: 'pageLogin.userName', col: 'col-lg-6', type: 'text', formControl: 'username' },
      { label: 'pageLogin.password', col: 'col-lg-6', type: 'text', formControl: 'password' }
    ]
  }

  uselanguage(language: string) {
    this.translate.use(language);
  }
}

```
