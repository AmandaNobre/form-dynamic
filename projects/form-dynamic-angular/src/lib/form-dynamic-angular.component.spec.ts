import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDynamicAngularComponent } from './form-dynamic-angular.component';

describe('FormDynamicAngularComponent', () => {
  let component: FormDynamicAngularComponent;
  let fixture: ComponentFixture<FormDynamicAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDynamicAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDynamicAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
