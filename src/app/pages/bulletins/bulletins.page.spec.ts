import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BulletinsPage } from './bulletins.page';

describe('BulletinsPage', () => {
  let component: BulletinsPage;
  let fixture: ComponentFixture<BulletinsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BulletinsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
