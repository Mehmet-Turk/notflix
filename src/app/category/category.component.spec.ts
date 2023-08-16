import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryComponent } from './action.component';

describe('CategoryComponent', () => {
  let component: CategoryComponent;
  let fixture: ComponentFixture<ActionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryComponent]
    });
    fixture = TestBed.createComponent(CategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
