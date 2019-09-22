import { TestBed, inject } from '@angular/core/testing';

import { HttpservService } from './httpserv.service';

describe('HttpservService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpservService]
    });
  });

  it('should be created', inject([HttpservService], (service: HttpservService) => {
    expect(service).toBeTruthy();
  }));
});
