import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeNewsComponent } from './change-news.component';

describe('ChangeNewsComponent', () => {
  let component: ChangeNewsComponent;
  let fixture: ComponentFixture<ChangeNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
