import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovtRegisterComponent } from './govt-register.component';

describe('GovtRegisterComponent', () => {
  let component: GovtRegisterComponent;
  let fixture: ComponentFixture<GovtRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovtRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GovtRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
