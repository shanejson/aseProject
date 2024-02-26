import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenProjectsComponent } from './citizen-projects.component';

describe('CitizenProjectsComponent', () => {
  let component: CitizenProjectsComponent;
  let fixture: ComponentFixture<CitizenProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitizenProjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CitizenProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
