import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepocardSkeletonComponent } from './repocard-skeleton.component';

describe('RepocardSkeleteonComponent', () => {
  let component: RepocardSkeletonComponent;
  let fixture: ComponentFixture<RepocardSkeletonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepocardSkeletonComponent]
    });
    fixture = TestBed.createComponent(RepocardSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
