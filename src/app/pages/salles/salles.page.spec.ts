import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SallesPage } from './salles.page';

describe('SallesPage', () => {
  let component: SallesPage;
  let fixture: ComponentFixture<SallesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SallesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
