import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarteScolairePage } from './carte-scolaire.page';

describe('CarteScolairePage', () => {
  let component: CarteScolairePage;
  let fixture: ComponentFixture<CarteScolairePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteScolairePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
