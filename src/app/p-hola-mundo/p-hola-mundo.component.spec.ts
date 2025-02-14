import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PHolaMundoComponent } from './p-hola-mundo.component';

describe('PHolaMundoComponent', () => {
  let component: PHolaMundoComponent;
  let fixture: ComponentFixture<PHolaMundoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PHolaMundoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PHolaMundoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
