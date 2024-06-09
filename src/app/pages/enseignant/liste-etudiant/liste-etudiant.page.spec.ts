import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeEtudiantPage } from './liste-etudiant.page';

describe('ListeEtudiantPage', () => {
  let component: ListeEtudiantPage;
  let fixture: ComponentFixture<ListeEtudiantPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeEtudiantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
