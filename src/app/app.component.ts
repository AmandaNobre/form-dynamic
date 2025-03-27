import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, UntypedFormBuilder, UntypedFormGroup, ValidatorFn, Validators } from '@angular/forms';
import { FormDynamicAngularModule, IForm } from 'projects/form-dynamic-angular/src/public-api';
import { MenuModule } from 'primeng/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ToolbarModule } from 'primeng/toolbar';
import { min, Observable } from 'rxjs';
import { InstallationComponent } from './pages/installation/installation.component';

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
  ) { }

  filesDonwload = [{ name: " aaa.pdf", contextTYpe: 'pdf', id: 123 }]
  validateForm: boolean = false
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

  teste(file: any) {
    console.log('file', file)

  }

  selectedCategories: any[] = [];

  minSelectedCheckboxes(min = 1) {
    const validator: any = (formArray: FormArray) => {
      const totalSelected = formArray.controls
        // get a list of checkbox values (boolean)
        .map(control => control.value)
        // total up the number of checked checkboxes
        .reduce((prev, next) => next ? prev + next : prev, 0);

      // if the total is not greater than the minimum, return the error message
      return totalSelected >= min ? null : { required: true };
    };

    return validator;
  }


  testeradio() {
    console.log(this.controlExemple.controls['user'].value)
    console.log(this.controlExemple.controls['teste'].value)

  }

  onBlur() {
    console.log("blur")
  }
  ngOnInit() {
    // this.controlExemple = this.fb.group({
    //   user: "",
    //   teste: 'asda',
    //   password: this.fb.array([
    //     this.fb.group({ 1: true }),
    //     this.fb.group({ 2: false })
    //   ])
    //   // user2: "123"
    // });

    this.controlExemple = this.fb.group({
      likertScale: this.fb.array([
        this.fb.group({
          question0: new FormControl(''),
        })
      ]),
      }
    )

    this.formmExemple = [
      {
        id: "deb3be53-8d57-4ea5-bef8-e9e7f365c954",
        type: "likert",
        label: "Pergunta teste",
        options: [],
        formControl: "likertScale",
        rowsTable: [
            "Declaração 0"
        ],
        colsTable: [
            {
                field: "Opcao 0",
                header: "Opção 0",
            },
            {
                field: "Opcao 1",
                header: "Opção 1"
            }
        ],
    }
    ]


    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if (screenSize.matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }

  show() {
    // this.observable.show()
    // this.httpClient.get('https://viacep.com.br/ws/01001000/json/').subscribe(d => console.log(d))
    // console.log(this.controlExemple.controls['user'].value)
    // this.validateForm = true
    console.log(this.controlExemple);
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
