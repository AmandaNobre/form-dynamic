import { TestBed } from '@angular/core/testing';

import { FormDynamicAngularService } from './form-dynamic-angular.service';

describe('FormDynamicAngularService', () => {
  let service: FormDynamicAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormDynamicAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
