import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChronoOverlayComponent } from './chrono-overlay.component';

describe('ChronoOverlayComponent', () => {
  let component: ChronoOverlayComponent;
  let fixture: ComponentFixture<ChronoOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChronoOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChronoOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
