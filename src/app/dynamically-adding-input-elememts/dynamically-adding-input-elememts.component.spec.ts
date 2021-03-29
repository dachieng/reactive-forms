import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicallyAddingInputElememtsComponent } from './dynamically-adding-input-elememts.component';

describe('DynamicallyAddingInputElememtsComponent', () => {
  let component: DynamicallyAddingInputElememtsComponent;
  let fixture: ComponentFixture<DynamicallyAddingInputElememtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicallyAddingInputElememtsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicallyAddingInputElememtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
