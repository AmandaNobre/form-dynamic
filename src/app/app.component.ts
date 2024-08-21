import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Sidebar, SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { FormArray, FormControl, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
// import { FormDynamicAngularModule, IForm, IButtonsStandard } from 'form-dynamic-angular';
import { FormDynamicAngularModule, IForm, IButtonsStandard } from 'projects/form-dynamic-angular/src/public-api';
import * as moment from 'moment';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ToolbarModule } from 'primeng/toolbar';
import { Observable, Subject, observable } from 'rxjs';
import { InstallationComponent } from './pages/installation/installation.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpContext } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarModule,
    ButtonModule,
    CommonModule,
    RouterLink,
    RouterLinkActive,
    FormDynamicAngularModule,
    MenuModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    ToolbarModule,
    InstallationComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  controlExemple: UntypedFormGroup
  formmExemple: IForm[] = []


  title = 'material-responsive-sidenav';
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isMobile = true;

  isCollapsed = true;

  loading$: Observable<boolean>;
  constructor(
    private observer: BreakpointObserver,
    private fb: UntypedFormBuilder,
    private changeDetector: ChangeDetectorRef,
    private httpClient: HttpClient
  ) {
  }

  filesDonwload = []

  change() {
    console.log("aaa")
  }

  clear() {
    console.log("bbb")
  }

  adminForm1 = this.fb.group({
    question1: new FormControl('', [Validators.required])
  });
  adminForm2 = this.fb.group({
    question2: new FormControl('', [Validators.required])
  });


  ngOnInit() {
    this.controlExemple = this.fb.group({
      user: "",
      // user2: "123"
    });


    this.formmExemple = [
      // { label: 'User', col: 'lg:col-6 md:col-6 col-6', type: 'date', formControl: 'user',  viewDate: 'date', maxlength: 5, colsTable: [{ field: "teste", header: "Teste" }, { field: "teste 2", header: "Teste 2" }, { field: "teste 3", header: "Teste 3" }], rowsTable: ["t1", "t2"] },
      // { label: 'User', col: 'lg:col-6 md:col-6 col-6', type: 'text-area', formControl: 'user2', maxlength: 5, colsTable: [{ field: "teste", header: "Teste" }, { field: "teste 2", header: "Teste 2" }, { field: "teste 3", header: "Teste 3" }], rowsTable: ["t1", "t2"] },
      // { label: 'User', col: 'lg:col-6 md:col-6 col-6', type: 'date', timeOnly: true,viewDate: 'date',formControl: 'user', search: true, id: "testqqqqqqqqqqqqqqqqqqqqqqqqe", options: [{ code: '1', description: 'as' }] },
      // { label: 'Password', col: 'lg:col-6 md:col-6 col-6', type: 'button', formControl: 'password', id: "adsa" },
      // { label: 'User', col: 'lg:col-12 md:col-12', type: 'check-box', formControl: 'user', id: "testqqqqqqqqqqqqqqqqqqqqqqqqe" },
      // { label: 'Password', col: 'lg:col-12 md:col-12', type: 'currency', formControl: 'password', id: "adsa" },
      // { label: 'User', col: 'lg:col-12 md:col-12', type: 'date', formControl: 'user', id: "testqqqqqqqqqqqqqqqqqqqqqqqqe" },
      // { label: 'Password', col: 'lg:col-12 md:col-12', type: 'switch', formControl: 'password', id: "adsa" },
      // { label: 'User', col: 'lg:col-12 md:col-12', type: 'list', formControl: 'user', id: "testqqqqqqqqqqqqqqqqqqqqqqqqe" },
      { label: 'Password', col: 'lg:col-6', type: 'upload-files', multileFile: true, formControl: 'password', id: "adsa", acceptFiles: "pdf/*", viewNameFile: true },
      // { label: 'User', col: 'lg:col-12 md:col-12', type: 'mask', mask: '999', formControl: 'user', id: "testqqqqqqqqqqqqqqqqqqqqqqqqe", onChange: () => this.change(), onCLear: () => this.clear() },
      // { label: 'User', col: 'lg:col-12 md:col-12', type: 'number', formControl: 'user', id: "testqqqqqqqqqqqqqqqqqqqqqqqqe" },
      // { label: 'Password', col: 'lg:col-12 md:col-12', type: 'radio-button', formControl: 'password', id: "adsa" },
      // { label: 'User', col: 'lg:col-12 md:col-12', type: 'select', formControl: 'user', id: "testqqqqqqqqqqqqqqqqqqqqqqqqe" },
      // { label: 'Password', col: 'lg:col-12 md:col-12', type: 'select-button', formControl: 'password', id: "adsa" },
      // { label: 'User', col: 'lg:col-12 md:col-12', type: 'table', formControl: 'user', id: "testqqqqqqqqqqqqqqqqqqqqqqqqe" },
      // { label: 'Password', col: 'lg:col-12 md:col-12', type: 'text', formControl: 'password', id: "adsa" },
      // { label: 'User', col: 'lg:col-12 md:col-12', type: 'text-area', formControl: 'user', id: "testqqqqqqqqqqqqqqqqqqqqqqqqe", rowsTextArea: 50 },
      // { label: 'Password', col: 'lg:col-12 md:col-12', type: 'multi', formControl: 'password', id: "adsa", onChange: () => console.log("as") },
      // { label: 'Password', col: 'lg:col-12 md:col-12', type: 'upload-files', formControl: 'password', id: "adsa", viewNameFile: false },
      // { label: 'Password', col: 'lg:col-12 md:col-12', type: 'photo', formControl: 'password', id: "adsa" },
      // { label: 'Password', col: 'lg:col-12 md:col-12', type: 'password', formControl: 'password', id: "adsa" },
    ]


    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if (screenSize.matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();

  }

  show() {
    // this.observable.show()
    // this.httpClient.get('https://viacep.com.br/ws/01001000/json/').subscribe(d => console.log(d))
    console.log(this.controlExemple.value)

  }

  toggleMenu() {
    if (this.isMobile) {
      this.sidenav.toggle();
      this.isCollapsed = false; // On mobile, the menu can never be collapsed
    } else {
      this.sidenav.open(); // On desktop/tablet, the menu can never be fully closed
      this.isCollapsed = !this.isCollapsed;
    }
  }
}
