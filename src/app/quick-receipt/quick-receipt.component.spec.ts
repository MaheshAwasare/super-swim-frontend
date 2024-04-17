import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickReceiptComponent } from './quick-receipt.component';

describe('QuickReceiptComponent', () => {
  let component: QuickReceiptComponent;
  let fixture: ComponentFixture<QuickReceiptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuickReceiptComponent]
    });
    fixture = TestBed.createComponent(QuickReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
