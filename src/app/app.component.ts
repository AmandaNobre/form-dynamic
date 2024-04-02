import { Component, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Sidebar, SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { FormControl, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
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
      startDate: new FormControl(""),
      endDate: new FormControl(""),
      requestingEmployee: new FormControl(""),
      usergEmployee: new FormControl(""),
      typeRoute: new FormControl(""),
      route: new FormControl(""),
      path: new FormControl(""),
      period: new FormControl(""),
      status: new FormControl("")
    });

    this.formmExemple = [
      { label: 'Data Inicial do Agendamento', col: 'lg:col-3 md:col-3', type: 'date', formControl: "startDate" },
      { label: 'Data Final do Agendamento', col: 'lg:col-3 md:col-3', type: 'date', formControl: "endDate" },
      { label: 'Funcionario Solicitante', col: 'lg:col-6 md:col-6', type: 'autocomplete', formControl: "requestingEmployee" },
      { label: 'Funcionario Utilizador', col: 'lg:col-6 md:col-6', type: 'autocomplete', formControl: "usergEmployee" },
      { label: 'Tipo de Rota', col: 'lg:col-3 md:col-3', type: 'select', formControl: "typeRoute" },
      { label: 'Rota', col: 'lg:col-3 md:col-3', type: 'select', formControl: "route" },
      { label: 'Percurso', col: 'lg:col-6 md:col-6', type: 'select', formControl: "path" },
      { label: 'Período', col: 'lg:col-3 md:col-3', type: 'select', formControl: "period" },
      {
        label: 'Status do Agendamento', col: 'lg:col-3 md:col-3', type: 'radio-button', options: [{ code: 1, description: "asd" }, { code: 2, description: "teste" }], formControl: "status"
      },
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
