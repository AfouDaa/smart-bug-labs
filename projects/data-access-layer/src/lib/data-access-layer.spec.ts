import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAccessLayer } from './data-access-layer';

describe('DataAccessLayer', () => {
  let component: DataAccessLayer;
  let fixture: ComponentFixture<DataAccessLayer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataAccessLayer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataAccessLayer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
