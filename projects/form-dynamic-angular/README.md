# FORM DYNAMIC ANGULAR

![Version](https://img.shields.io/npm/v/form-dynamic-angular.svg ) 

## Description
The form-dynamic is a solution whith objectve is minimize the coding in forms, so one json you can have mutch components in forms in primeng as: input (text and number),  select, treeSelect, autocomplete, date, dateTime, textarea, checkbox, button, upload files, list e radioButton


## 1. Basic Usage 📑
```js

import { FormDynamicAngularModule } from 'form-dynamic-angular';

<form-dynamic-angular title="Exemple" [form]=formmExemple [control]=controlExemple></form-dynamic-angular>

formmExemple: IForm[] =  = [
      { label: 'Requester', col: 'col-lg-6', type: 'text', formControl: 'requester'},
      { label: 'Manager', col: 'col-lg-6', type: 'text', formControl: 'manager' }
    ]

controlExemple: UntypedFormGroup = this.fb.group({
      requester: '',
      manager: ''
    });


```

----

## 2. Props 💬

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