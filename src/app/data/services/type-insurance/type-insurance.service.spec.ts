import { TestBed } from '@angular/core/testing';

import { TypeInsuranceService } from './type-insurance.service';

describe('TypeInsuranceService', () => {
  let service: TypeInsuranceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeInsuranceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
