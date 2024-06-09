import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeCoursPage } from './liste-cours.page';

describe('ListeCoursPage', () => {
  let component: ListeCoursPage;
  let fixture: ComponentFixture<ListeCoursPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCoursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
