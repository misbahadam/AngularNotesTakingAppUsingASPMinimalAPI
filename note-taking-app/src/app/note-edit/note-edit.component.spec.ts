import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoteEditComponent } from './note-edit.component';
import { NoteService } from '../services/note.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('NoteEditComponent', () => {
  let component: NoteEditComponent;
  let fixture: ComponentFixture<NoteEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoteEditComponent],
      providers: [NoteService], // Provide any necessary dependencies
      imports: [HttpClientTestingModule, FormsModule], // Add required modules
    });

    fixture = TestBed.createComponent(NoteEditComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a method to save a new note', () => {
    // Write a test to check if the saveNote method works for new notes.
    // You can use TestBed.inject(NoteService) to get a reference to the service and spy on its methods.
  });

  it('should have a method to update an existing note', () => {
    // Write a test to check if the saveNote method works for updating existing notes.
  });

  it('should load note details when an ID is provided', () => {
    // Write a test to check if note details are loaded when an ID is provided in the route.
  });

  // Add more tests as needed to cover specific functionality.
});
