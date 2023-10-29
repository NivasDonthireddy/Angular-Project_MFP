import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildStandComponent } from './child-stand.component';

describe('ChildStandComponent', () => {
  let component: ChildStandComponent;
  let fixture: ComponentFixture<ChildStandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChildStandComponent]
    });
    fixture = TestBed.createComponent(ChildStandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
