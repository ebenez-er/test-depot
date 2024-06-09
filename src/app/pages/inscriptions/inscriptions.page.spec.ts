import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InscriptionsPage } from './inscriptions.page';

describe('InscriptionsPage', () => {
  let component: InscriptionsPage;
  let fixture: ComponentFixture<InscriptionsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
