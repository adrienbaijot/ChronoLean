import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChronoTaskComponent } from './chrono-task.component';

describe('ChronoTaskComponent', () => {
  let component: ChronoTaskComponent;
  let fixture: ComponentFixture<ChronoTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChronoTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChronoTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
