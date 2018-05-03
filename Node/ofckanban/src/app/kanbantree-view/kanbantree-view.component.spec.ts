import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbantreeViewComponent } from './kanbantree-view.component';

describe('KanbantreeViewComponent', () => {
  let component: KanbantreeViewComponent;
  let fixture: ComponentFixture<KanbantreeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanbantreeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanbantreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
