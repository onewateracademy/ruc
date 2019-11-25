import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RucTalksComponent } from './ruc-talks.component';

describe('RucTalksComponent', () => {
  let component: RucTalksComponent;
  let fixture: ComponentFixture<RucTalksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RucTalksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RucTalksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
