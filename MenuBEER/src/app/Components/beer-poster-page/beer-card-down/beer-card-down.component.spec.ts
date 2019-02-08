import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerCardDownComponent } from './beer-card-down.component';

describe('BeerCardDownComponent', () => {
  let component: BeerCardDownComponent;
  let fixture: ComponentFixture<BeerCardDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerCardDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerCardDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
