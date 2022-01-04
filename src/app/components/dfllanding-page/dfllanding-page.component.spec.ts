import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DFLLandingPageComponent } from './dfllanding-page.component';

describe('DFLLandingPageComponent', () => {
  let component: DFLLandingPageComponent;
  let fixture: ComponentFixture<DFLLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DFLLandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DFLLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
