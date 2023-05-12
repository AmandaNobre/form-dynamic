import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { UntypedFormGroup } from '@angular/forms';

interface IList {
  name: string,
  code: number
}



export interface IForm {
  label: string,
  type: string,
  disabled: boolean | null,
  col: string,
  selectOptions?: any
  suggestionsAutoComplete?: any
  datePeriodo?: boolean
  formControl?: string,
  list?: IList[],
  clean?: Function;
  formControlPeriod?: string,
  listRadioButton?: any[],
  treeSelect?: any,
  onChange?: Function;
  forceSelection?: boolean
}


@Component({
  selector: 'lib-form',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.css']
})

export class FormComponent implements OnInit {
  @Input() title!: string;

  @Output() filter = new EventEmitter<any>();
  @Output() clean = new EventEmitter<any>();
  @Output() onChange = new EventEmitter<any>();

  @Input() form: IForm[] = []

  @Input() control: UntypedFormGroup;

  @Input() viewButtons: boolean = true;
  @Input() viewFIlter: boolean = false;
  @Input() viewClean: boolean = false;
  @Input() treeSelect: any;
  @Input() files: File[] = [];

  filteredAutoComplete: any[] = [];
  maxDate: Date
  minDate: Date

  constructor(
    // public translate: TranslateService,
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
        if (dados.Descricao.toLowerCase().indexOf(query.toLowerCase()) == 0) {
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
