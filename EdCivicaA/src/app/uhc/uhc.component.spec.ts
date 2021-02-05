import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UhcComponent } from './uhc.component';

describe('UhcComponent', () => {
  let component: UhcComponent;
  let fixture: ComponentFixture<UhcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UhcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UhcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
