import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonnelsPage } from './personnels.page';

describe('PersonnelsPage', () => {
  let component: PersonnelsPage;
  let fixture: ComponentFixture<PersonnelsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnelsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
