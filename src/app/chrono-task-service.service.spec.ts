import { TestBed, inject } from '@angular/core/testing';

import { ChronoTaskServiceService } from './chrono-task-service.service';

describe('ChronoTaskServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChronoTaskServiceService]
    });
  });

  it('should ...', inject([ChronoTaskServiceService], (service: ChronoTaskServiceService) => {
    expect(service).toBeTruthy();
  }));
});
