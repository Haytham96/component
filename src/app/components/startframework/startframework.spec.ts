import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Startframework } from './startframework';

describe('Startframework', () => {
  let component: Startframework;
  let fixture: ComponentFixture<Startframework>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Startframework]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Startframework);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
