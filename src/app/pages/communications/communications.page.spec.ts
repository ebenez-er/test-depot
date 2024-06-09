import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommunicationsPage } from './communications.page';

describe('CommunicationsPage', () => {
  let component: CommunicationsPage;
  let fixture: ComponentFixture<CommunicationsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
