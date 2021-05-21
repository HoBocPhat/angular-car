import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsaleComponent } from './carsale.component';

describe('CarsaleComponent', () => {
  let component: CarsaleComponent;
  let fixture: ComponentFixture<CarsaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
