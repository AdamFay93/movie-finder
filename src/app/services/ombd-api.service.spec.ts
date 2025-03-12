import { TestBed } from '@angular/core/testing';
import { OmbdApiService } from './ombd-api.service';

describe('OmbdApiService', () => {
  let service: OmbdApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OmbdApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
