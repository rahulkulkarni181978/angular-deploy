import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifierchartComponent } from './notifierchart.component';

describe('NotifierchartComponent', () => {
  let component: NotifierchartComponent;
  let fixture: ComponentFixture<NotifierchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifierchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifierchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
