import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastContainrerComponent } from './toast-containrer.component';

describe('ToastContainrerComponent', () => {
  let component: ToastContainrerComponent;
  let fixture: ComponentFixture<ToastContainrerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToastContainrerComponent]
    });
    fixture = TestBed.createComponent(ToastContainrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
