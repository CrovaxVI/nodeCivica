import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuberComponent } from './tuber.component';

describe('TuberComponent', () => {
  let component: TuberComponent;
  let fixture: ComponentFixture<TuberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TuberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
