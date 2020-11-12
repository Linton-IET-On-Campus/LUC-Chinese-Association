import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCommitteeComponent } from './edit-committee.component';

describe('EditCommitteeComponent', () => {
  let component: EditCommitteeComponent;
  let fixture: ComponentFixture<EditCommitteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCommitteeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
