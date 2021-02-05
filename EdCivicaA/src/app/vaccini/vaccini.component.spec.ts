import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacciniComponent } from './vaccini.component';

describe('VacciniComponent', () => {
  let component: VacciniComponent;
  let fixture: ComponentFixture<VacciniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacciniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacciniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
