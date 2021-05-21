import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecompriceComponent } from './recomprice.component';

describe('RecompriceComponent', () => {
  let component: RecompriceComponent;
  let fixture: ComponentFixture<RecompriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecompriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecompriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
