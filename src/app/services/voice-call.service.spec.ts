import { TestBed } from '@angular/core/testing';

import { VoiceCallService } from './voice-call.service';

describe('VoiceCallService', () => {
  let service: VoiceCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoiceCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
