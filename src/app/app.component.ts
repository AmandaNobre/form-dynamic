import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Sidebar, SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { FormControl, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
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

  ngOnInit() {
    this.controlExemple = this.fb.group({
      user: '',
      password: ''
    });

    this.formmExemple = [
      // { label: 'User', col: 'lg:col-6 md:col-6 col-6', type: 'autocomplete', formControl: 'user', id: "testqqqqqqqqqqqqqqqqqqqqqqqqe" },
      // { label: 'Password', col: 'lg:col-6 md:col-6 col-6', type: 'button', formControl: 'password', id: "adsa" },
      // { label: 'User', col: 'lg:col-12 md:col-12', type: 'check-box', formControl: 'user', id: "testqqqqqqqqqqqqqqqqqqqqqqqqe" },
      // { label: 'Password', col: 'lg:col-12 md:col-12', type: 'currency', formControl: 'password', id: "adsa" },
      // { label: 'User', col: 'lg:col-12 md:col-12', type: 'date', formControl: 'user', id: "testqqqqqqqqqqqqqqqqqqqqqqqqe" },
      // { label: 'Password', col: 'lg:col-12 md:col-12', type: 'switch', formControl: 'password', id: "adsa" },
      // { label: 'User', col: 'lg:col-12 md:col-12', type: 'list', formControl: 'user', id: "testqqqqqqqqqqqqqqqqqqqqqqqqe" },
      { label: 'Password', col: 'lg:col-6', type: 'upload-files', multileFile: false, formControl: 'password', id: "adsa" },
      // { label: 'User', col: 'lg:col-12 md:col-12', type: 'number', formControl: 'user', id: "testqqqqqqqqqqqqqqqqqqqqqqqqe" },
      // { label: 'Password', col: 'lg:col-12 md:col-12', type: 'radio-button', formControl: 'password', id: "adsa" },
      // { label: 'User', col: 'lg:col-12 md:col-12', type: 'select', formControl: 'user', id: "testqqqqqqqqqqqqqqqqqqqqqqqqe" },
      // { label: 'Password', col: 'lg:col-12 md:col-12', type: 'select-button', formControl: 'password', id: "adsa" },
      // { label: 'User', col: 'lg:col-12 md:col-12', type: 'table', formControl: 'user', id: "testqqqqqqqqqqqqqqqqqqqqqqqqe" },
      // { label: 'Password', col: 'lg:col-12 md:col-12', type: 'text', formControl: 'password', id: "adsa" },
      // { label: 'User', col: 'lg:col-12 md:col-12', type: 'text-area', formControl: 'user', id: "testqqqqqqqqqqqqqqqqqqqqqqqqe" },
      // { label: 'Password', col: 'lg:col-12 md:col-12', type: 'multi', formControl: 'password', id: "adsa" },
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
    this.httpClient.get('https://viacep.com.br/ws/01001000/json/').subscribe(d => console.log(d))

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
