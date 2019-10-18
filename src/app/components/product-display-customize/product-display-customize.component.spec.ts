import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDisplayCustomizeComponent } from './product-display-customize.component';

describe('ProductDisplayCustomizeComponent', () => {
  let component: ProductDisplayCustomizeComponent;
  let fixture: ComponentFixture<ProductDisplayCustomizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDisplayCustomizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDisplayCustomizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
