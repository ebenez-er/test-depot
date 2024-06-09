import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComptablePage } from './comptable.page';

describe('ComptablePage', () => {
  let component: ComptablePage;
  let fixture: ComponentFixture<ComptablePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
