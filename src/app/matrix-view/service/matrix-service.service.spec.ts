import { TestBed } from '@angular/core/testing';

import { MatrixService } from './matrix.service';

describe('MatrixServiceService', () => {
  let service: MatrixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatrixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
