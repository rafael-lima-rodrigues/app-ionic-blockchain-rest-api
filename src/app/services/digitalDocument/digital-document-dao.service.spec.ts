import { TestBed } from '@angular/core/testing';

import { DigitalDocumentDaoService } from './digital-document-dao.service';

describe('DigitalDocumentDaoService', () => {
  let service: DigitalDocumentDaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DigitalDocumentDaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
