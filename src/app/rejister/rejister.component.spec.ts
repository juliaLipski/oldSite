import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { rejisterComponent } from './rejister.component';

describe('rejisterComponent', () => {
  let component: rejisterComponent;
  let fixture: ComponentFixture<rejisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ rejisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(rejisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
