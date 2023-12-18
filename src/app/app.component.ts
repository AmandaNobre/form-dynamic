import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormControl, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

// import { IForm, IList } from 'form-dynamic-angular';
import { IButtonsStandard, IForm, IList, IOptions, ITreeSelectOptions } from 'projects/form-dynamic-angular/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  controlExemple: UntypedFormGroup
  formmExemple: IForm[] = []

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
      { label: 'User', col: 'col-lg-6', type: 'text', formControl: 'user', disabled: true },
      { label: 'Password', col: 'col-lg-6', type: 'text', formControl: 'password', disabled: false }
    ]


    this.controlAutocomplete = this.fb.group({
      cities: '',
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
      { label: 'Cities', col: 'col-lg-6', type: 'autocomplete', formControl: 'cities', options: this.options },
      { label: 'Cities', col: 'col-lg-6', type: 'list', formControl: 'cities', options: this.options },
      { label: 'Cities', col: 'col-lg-6', type: 'radio-button', formControl: 'cities', options: this.options },
      { label: 'Cities', col: 'col-lg-6', type: 'select', formControl: 'cities', options: this.options },
      { label: 'Cities', col: 'col-lg-6', type: 'select-button', formControl: 'selectButton', options: this.options },
      { label: 'Cities', col: 'col-lg-6', type: 'table', formControl: 'selectButton', options: this.options },
      { label: 'Ver cidade', col: 'col-lg-4', type: 'button', onCLick: this.click },
      { label: 'Ckeck', col: 'col-lg-6', type: 'check-box', formControl: 'ckech' },
      { label: 'Date', col: 'col-lg-6', type: 'date', formControl: 'date' },
      { label: 'Date', col: 'col-lg-6', type: 'date', formControl: 'date1', datePeriod: true, formControlSecondary: "date2" },
      { label: 'Date', col: 'col-lg-6', type: 'date-time', formControl: 'date1' },
      { label: 'Switch', col: 'col-lg-6', type: 'switch', formControl: 'switch' },
      { label: 'text', col: 'col-lg-6', type: 'text', formControl: 'date2' },
      { label: 'Number', col: 'col-lg-6', type: 'number', formControl: 'number' },
      { label: 'TextArea', col: 'col-lg-6', type: 'text-area', formControl: 'number' },
      { label: "pageRequests.installationLocation", col: 'col-lg-6', type: 'tree-select', formControl: 'installationLocation', treeSelectOptions: this.treeSelect },

    ]
  }

  click() {
    console.log("click button")
  }
}
