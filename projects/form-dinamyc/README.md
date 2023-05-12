# FORM DINAMYC ANGULAR

![Version](https://img.shields.io/npm/v/form-dinamyc.svg ) 

## Description
The form-dinamic is a solution whith objectve is minimize the coding in forms, so one json you can have mutch components in forms in primeng as: input (text and number),  select, treeSelect, autocomplete, date, dateTime, textarea, checkbox, button, upload files, list e radioButton


## 3. Basic Usage 📑
```js

import { FormModule } from 'form-dinamyc/src/lib/form.module'

<lib-form title="Exemple" [form]=formmExemple [control]=controlExemple></lib-form>

formmExemple: IForm[] =  = [
      { label: 'Requester', col: 'col-lg-6', type: 'text', formControl: 'requester'},
      { label: 'Manager', col: 'col-lg-6', type: 'text', formControl: 'manager' }
    ]

controlExemple: UntypedFormGroup = this.fb.group({
      requester: '',
      manager: ''
    });


## 4. Props 💬

| Prop  | Type  | Default | Description |
