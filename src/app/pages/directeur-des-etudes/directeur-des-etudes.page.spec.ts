import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DirecteurDesEtudesPage } from './directeur-des-etudes.page';

describe('DirecteurDesEtudesPage', () => {
  let component: DirecteurDesEtudesPage;
  let fixture: ComponentFixture<DirecteurDesEtudesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DirecteurDesEtudesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
