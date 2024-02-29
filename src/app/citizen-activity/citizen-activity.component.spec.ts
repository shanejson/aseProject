import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenActivityComponent } from './citizen-activity.component';

describe('CitizenActivityComponent', () => {
  let component: CitizenActivityComponent;
  let fixture: ComponentFixture<CitizenActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitizenActivityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CitizenActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
