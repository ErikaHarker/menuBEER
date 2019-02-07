import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerPosterPageComponent } from './beer-poster-page.component';

describe('BeerPosterPageComponent', () => {
  let component: BeerPosterPageComponent;
  let fixture: ComponentFixture<BeerPosterPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerPosterPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerPosterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
