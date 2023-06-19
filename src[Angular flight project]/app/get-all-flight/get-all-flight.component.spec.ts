import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllFlightComponent } from './get-all-flight.component';

describe('GetAllFlightComponent', () => {
  let component: GetAllFlightComponent;
  let fixture: ComponentFixture<GetAllFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllFlightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
