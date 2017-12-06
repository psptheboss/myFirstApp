import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrplComponent } from './wrpl.component';

describe('WrplComponent', () => {
  let component: WrplComponent;
  let fixture: ComponentFixture<WrplComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrplComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
