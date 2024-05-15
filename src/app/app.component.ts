import { Component, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Sidebar, SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { FormControl, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { FormDynamicAngularModule, IForm, IButtonsStandard } from 'form-dynamic-angular';
// import { FormDynamicAngularModule, IForm, IButtonsStandard } from 'projects/form-dynamic-angular/src/public-api';
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
    FormDynamicAngularModule,
    MenuModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    ToolbarModule
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
  constructor(
    private observer: BreakpointObserver,
    private fb: UntypedFormBuilder,) { }

  ngOnInit() {

    this.controlExemple = this.fb.group({
      user: '',
      password: ''
    });

    this.formmExemple = [
      { label: 'User', col: 'md:col-6', type: 'text', formControl: 'user' },
      { label: 'Password', col: 'md:col-6', type: 'text', formControl: 'password', id: "adsa" }
    ]


    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if (screenSize.matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
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
