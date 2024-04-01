import { Component, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Sidebar, SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { FormDynamicAngularModule, IForm, IButtonsStandard } from 'projects/form-dynamic-angular/src/public-api';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SidebarModule,
    ButtonModule,
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    FormDynamicAngularModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  closeCallback(e: Event): void {
    this.sidebarRef.close(e);
  }

  sidebarVisible: boolean = false;



  controlExemple: UntypedFormGroup
  formmExemple: IForm[] = []
  buttonsStandard: IButtonsStandard[] = [
    { type: 'save', onCLick: () => console.log(), styleClass: 'p-button-outlined' }
  ]

  constructor(
    private fb: UntypedFormBuilder,
  ) { }

  ngOnInit() {
    this.controlExemple = this.fb.group({
      date: new FormControl([
        new Date(),
        moment(new Date()).add(7, 'days').toDate()
      ]),
      date2: ""
    });

    this.formmExemple = [
      { label: 'Date', col: 'col-lg-6', numberOfMonthsDate: 2, selectionMode: "range", onChange: () => this.changeMaxDate(), onFocusDate: () => this.focusDate(), minDate: new Date(), type: 'date', formControl: 'date' },
      { label: 'User', col: 'col-lg-6', showTime: true, type: 'date', formControl: 'date2' },
      { textButton: 'Ver cidade', col: 'col-lg-4', type: 'button', icon: 'pi pi-plus', class: 'p-button-outlined', disabled: true }

      // { label: 'Password', col: 'col-lg-6', type: 'text', formControl: 'password' }
    ]

  }
  focusDate() {
    this.formmExemple[0].maxDate = undefined
  }

  changeMaxDate() {
    const control = this.controlExemple.value
    this.formmExemple[0].maxDate = moment(control.date[0]).add(7, 'days').toDate()
  }

}
