import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';


export interface IList {
  id: number | string,
  name: string
}



export interface IForm {
  label: string,
  type: string,
  disabled: boolean | null,
  col: string,
  datePeriodo?: boolean
  formControl?: string,
  clean?: Function;
  treeSelect?: any,
  onChange?: Function;
  forceSelection?: boolean
  formControlSecondary?: string,
  onCLick?: Function,
  list?: IList[]
}


@Component({
  selector: 'form-dynamic-angular',
  templateUrl: 'form-dynamic-angular.component.html',
  styleUrls: ['form-dynamic-angular.component.css']
})

export class FormDynamicAngularComponent {
  @Input() title!: string;

  @Output() filter = new EventEmitter<any>();
  @Output() clean = new EventEmitter<any>();
  @Output() onChange = new EventEmitter<any>();

  @Input() form: IForm[] = []
  @Input() control: UntypedFormGroup;

  @Input() viewFIlter: boolean = false;
  @Input() viewClean: boolean = false;
  @Input() files: File[] = [];

  filteredAutoComplete: any[] = [];
  maxDate: Date
  minDate: Date

  constructor(
    public translate: TranslateService,
  ) {
  }

  ngOnInit(): void { }


  onFocusDate(date: Date) {
    // this.minDate = moment(date).toDate()
    // this.maxDate = moment(date).add(6, 'month').toDate();
  }

  onSelect(event: { addedFiles: any; }) {
    this.files.push(...event.addedFiles);
  }

  onRemove(event: File) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  filterAutoComplete(event: { query: any; }, suggestionsAutoComplete: any) {
    let filtered: any[] = [];
    let query = event.query;

    if (suggestionsAutoComplete) {
      for (let i = 0; i < suggestionsAutoComplete.length; i++) {
        let dados = suggestionsAutoComplete[i];
        if (dados.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
          filtered.push(dados);
        }
      }

      this.filteredAutoComplete = filtered;
    }
  }

  onChangevalues() {
    this.onChange.emit();
  }

  onClickFilter() {
    this.filter.emit(null);
  }

  onClickclean() {
    this.clean.emit(null);
  }
}
