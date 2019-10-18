import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDisplayViewComponent } from './product-display-view.component';

describe('ProductDisplayViewComponent', () => {
  let component: ProductDisplayViewComponent;
  let fixture: ComponentFixture<ProductDisplayViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDisplayViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDisplayViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
