import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sample3ComponentComponent } from './sample3-component.component';

describe('Sample3ComponentComponent', () => {
  let component: Sample3ComponentComponent;
  let fixture: ComponentFixture<Sample3ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sample3ComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sample3ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
