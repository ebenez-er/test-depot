import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DirecteurPage } from './directeur.page';

describe('DirecteurPage', () => {
  let component: DirecteurPage;
  let fixture: ComponentFixture<DirecteurPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DirecteurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
