import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeSallesPage } from './liste-salles.page';

describe('ListeSallesPage', () => {
  let component: ListeSallesPage;
  let fixture: ComponentFixture<ListeSallesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeSallesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
