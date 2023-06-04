import { TestBed } from '@angular/core/testing';

import { NgxInteractableElementService } from './ngx-interactable-element.service';

describe('NgxInteractableElementService', () => {
  let service: NgxInteractableElementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxInteractableElementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
