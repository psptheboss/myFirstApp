import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NrplComponent } from './nrpl.component';

describe('NrplComponent', () => {
  let component: NrplComponent;
  let fixture: ComponentFixture<NrplComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NrplComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NrplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
