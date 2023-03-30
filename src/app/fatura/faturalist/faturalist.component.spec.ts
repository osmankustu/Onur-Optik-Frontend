import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaturalistComponent } from './faturalist.component';

describe('FaturalistComponent', () => {
  let component: FaturalistComponent;
  let fixture: ComponentFixture<FaturalistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaturalistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaturalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
