import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovtDashboardComponent } from './govt-dashboard.component';

describe('GovtDashboardComponent', () => {
  let component: GovtDashboardComponent;
  let fixture: ComponentFixture<GovtDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovtDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GovtDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
