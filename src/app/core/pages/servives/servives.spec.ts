import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Servives } from './servives';

describe('Servives', () => {
  let component: Servives;
  let fixture: ComponentFixture<Servives>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Servives]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Servives);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
