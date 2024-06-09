import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeEnseignantPage } from './liste-enseignant.page';

describe('ListeEnseignantPage', () => {
  let component: ListeEnseignantPage;
  let fixture: ComponentFixture<ListeEnseignantPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeEnseignantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
