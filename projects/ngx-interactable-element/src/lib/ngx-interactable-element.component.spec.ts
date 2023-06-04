import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxInteractableElementComponent } from './ngx-interactable-element.component';

describe('NgxInteractableElementComponent', () => {
  let component: NgxInteractableElementComponent;
  let fixture: ComponentFixture<NgxInteractableElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxInteractableElementComponent]
    });
    fixture = TestBed.createComponent(NgxInteractableElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
