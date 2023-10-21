import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteDeleteComponent } from './note-delete.component';

describe('NoteDeleteComponent', () => {
  let component: NoteDeleteComponent;
  let fixture: ComponentFixture<NoteDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoteDeleteComponent]
    });
    fixture = TestBed.createComponent(NoteDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
