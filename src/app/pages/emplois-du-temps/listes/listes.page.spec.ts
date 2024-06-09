import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListesPage } from './listes.page';

describe('ListesPage', () => {
  let component: ListesPage;
  let fixture: ComponentFixture<ListesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
