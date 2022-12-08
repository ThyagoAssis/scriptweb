import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoformupdateComponent } from './fotoformupdate.component';

describe('FotoformupdateComponent', () => {
  let component: FotoformupdateComponent;
  let fixture: ComponentFixture<FotoformupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotoformupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FotoformupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
