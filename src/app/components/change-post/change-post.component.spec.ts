import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePostComponent } from './change-post.component';

describe('ChangePostComponent', () => {
  let component: ChangePostComponent;
  let fixture: ComponentFixture<ChangePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
