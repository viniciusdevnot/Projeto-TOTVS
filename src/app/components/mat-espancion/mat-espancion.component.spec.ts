import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatEspancionComponent } from './mat-espancion.component';

describe('MatEspancionComponent', () => {
  let component: MatEspancionComponent;
  let fixture: ComponentFixture<MatEspancionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatEspancionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatEspancionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
