import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SurveillantPage } from './surveillant.page';

describe('SurveillantPage', () => {
  let component: SurveillantPage;
  let fixture: ComponentFixture<SurveillantPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveillantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
