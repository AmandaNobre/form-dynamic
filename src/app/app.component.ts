import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { IForm } from 'projects/form-dinamyc/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'form-dynamic';


  formResponsible: IForm[] = []
  formBypass: IForm[] = []
  formIdentification: IForm[] = []
  formnoteSAPMaintenanceOrder: IForm[] = []
  formmitigationBarriers: IForm[] = []

  controlResponsible: UntypedFormGroup;
  controlBypass: UntypedFormGroup;
  controlIdentification: UntypedFormGroup;
  controlnoteSAPMaintenanceOrder: UntypedFormGroup;
  controlmitigationBarriers: UntypedFormGroup;

  constructor(
    private fb: UntypedFormBuilder,
  ) {
  }

  ngOnInit() {
    this.controlResponsible = this.fb.group({
      requester: '',
      manager: ''
    });

    this.controlBypass = this.fb.group({
      uo: null,
      critical: false,
      installationLocation: '',
      component: ''
    });

    this.controlIdentification = this.fb.group({
      bypassapplicationcondition: '',
      startDate: new Date(),
      dueDate: new Date(),
      notOperational: false,
      planning: '',
      unwantedEventType: '',
      unwantedEvent: '',
      actuationPointtripinEngineeringUnit: '',
      bypassDescriptionandReason: '',
      project: '',
    });


    this.controlnoteSAPMaintenanceOrder = this.fb.group({
      type: '',
      number: '',
      plant: '',
      description: '',
      originSystem: '',
    });

    this.controlmitigationBarriers = this.fb.group({
      mitigatingbarrierstocompensatefortheapplicationoftheSTP: '',
      monitoredbackupvariable: '',
      responsibility: '',
      monitoredbackupperformancelimit: '',
      shutdownShutdownincaseoflimitactuation: '',
      responsibility2: '',
    });

    this.formResponsible = [
      { label: 'pageRequests.requester', col: 'col-lg-6', type: 'text', formControl: 'requester', disabled: true },
      { label: 'pageRequests.manager', col: 'col-lg-6', type: 'text', formControl: 'manager', disabled: true }
    ]

    this.formBypass = [
      { label: 'UO: *', type: 'select', formControl: 'uo', col: 'col-lg-6', disabled: null, selectOptions: [{ Codigo: "12", Descricao: "as" }, { Codigo: "1a2", Descricao: "asdas" }] },
      { label: "pageRequests.installationLocation", col: 'col-lg-6', type: 'treeSelect', formControl: 'installationLocation', disabled: false },
      { label: 'pageRequests.component', col: 'col-lg-6', type: 'autocomplete', forceSelection: false, formControl: 'component', disabled: false },
      { label: 'pageRequests.critical', col: 'col-lg-6', type: 'checkbox', formControl: 'critical', disabled: null },
    ]

    this.formIdentification = [
      { label: 'pageRequests.startDate', col: 'col-lg-3', type: 'dateTime', formControl: 'startDate', disabled: null },
      { label: 'pageRequests.dueDate', col: 'col-lg-3', type: 'dateTime', formControl: 'dueDate', disabled: null },
      { label: 'pageRequests.notOperational', col: 'col-lg-2', type: 'checkbox', formControl: 'notOperational', disabled: null },
      { label: 'pageRequests.bypassDescriptionandReason', col: 'col-lg-12', type: 'textarea', formControl: 'bypassDescriptionandReason', disabled: null },
      { label: 'pageRequests.planning', type: 'select', formControl: 'planning', col: 'col-lg-6', disabled: null },
      { label: 'pageRequests.unwantedEventType', type: 'select', formControl: 'unwantedEventType', col: 'col-lg-6', disabled: null },
      { label: 'pageRequests.unwantedEvent', col: 'col-lg-12', type: 'textarea', formControl: 'unwantedEvent', disabled: null },
      { label: 'pageRequests.actuationPointtripinEngineeringUnit', type: 'text', formControl: 'actuationPointtripinEngineeringUnit', col: 'col-lg-12', disabled: null },
      { label: 'pageRequests.project', col: 'col-lg-6', type: 'text', formControl: 'project', disabled: null },
      { label: 'pageRequests.bypassapplicationcondition', type: 'select', formControl: 'bypassapplicationcondition', col: 'col-lg-6', disabled: null },
    ]

    this.formnoteSAPMaintenanceOrder = [
      { label: 'pageRequests.number', col: 'col-lg-4', type: 'number', formControl: 'number', disabled: null },
      { label: 'pageRequests.type', col: 'col-lg-4', type: 'text', formControl: 'type', disabled: null },
      { label: 'pageRequests.registerInSap', col: 'col-lg-4', type: 'button', formControl: 'type', disabled: null },
      { label: 'pageRequests.plant', col: 'col-lg-4', type: 'text', formControl: 'plant', disabled: null },
      { label: 'pageRequests.description', col: 'col-lg-4', type: 'text', formControl: 'description', disabled: null },
      { label: 'pageRequests.originSystem', col: 'col-lg-4', type: 'text', formControl: 'originSystem', disabled: null },
    ]

    this.formmitigationBarriers = [
      { label: 'pageRequests.mitigatingbarrierstocompensatefortheapplicationoftheSTP', col: 'col-lg-12', type: 'textarea', formControl: 'mitigatingbarrierstocompensatefortheapplicationoftheSTP', disabled: null },
      { label: 'pageRequests.monitoredbackupvariable', col: 'col-lg-6', type: 'text', formControl: 'monitoredbackupvariable', disabled: null },
      { label: 'pageRequests.responsibility', col: 'col-lg-6', type: 'text', formControl: 'responsibility', disabled: null },
      { label: 'pageRequests.monitoredbackupperformancelimit', col: 'col-lg-12', type: 'textarea', formControl: 'monitoredbackupperformancelimit', disabled: null },
      { label: 'pageRequests.shutdownShutdownincaseoflimitactuation', col: 'col-lg-6', type: 'text', formControl: 'shutdownShutdownincaseoflimitactuation', disabled: null },
      { label: 'pageRequests.responsibility', col: 'col-lg-6', type: 'text', formControl: 'responsibility2', disabled: null },
    ]
  }

}
