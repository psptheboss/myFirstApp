import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErplComponent } from './erpl.component';

describe('ErplComponent', () => {
  let component: ErplComponent;
  let fixture: ComponentFixture<ErplComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErplComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
