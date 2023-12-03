import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercardSkeletonComponent } from './usercard-skeleton.component';

describe('UsercardSkeletonComponent', () => {
  let component: UsercardSkeletonComponent;
  let fixture: ComponentFixture<UsercardSkeletonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsercardSkeletonComponent]
    });
    fixture = TestBed.createComponent(UsercardSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
