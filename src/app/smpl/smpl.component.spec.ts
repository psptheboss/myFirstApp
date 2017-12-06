import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmplComponent } from './smpl.component';

describe('SmplComponent', () => {
  let component: SmplComponent;
  let fixture: ComponentFixture<SmplComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmplComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
