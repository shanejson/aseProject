import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenRegisterComponent } from './citizen-register.component';

describe('CitizenRegisterComponent', () => {
  let component: CitizenRegisterComponent;
  let fixture: ComponentFixture<CitizenRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitizenRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CitizenRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
