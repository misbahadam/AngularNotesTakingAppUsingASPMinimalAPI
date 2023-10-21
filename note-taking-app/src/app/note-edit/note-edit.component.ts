import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import API_ENDPOINTS from 'src/app/constants/APIEndpoints';
import HTTP_OPTIONS from 'src/app/constants/HttpOptions';
import { NoteCreateUpdateDTO } from '../models/noteCUDto.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from '../services/note.service';
import { Note } from '../models/note.model';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {
  form!: FormGroup;
  noteToUpdate!: Note;

  updateSuccessful: boolean = false;
  updateFailed: boolean = false;

  constructor(public fb: FormBuilder, private httpClient: HttpClient, public activeModal: NgbActiveModal, private noteService: NoteService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [this.noteToUpdate.id],
      title: [this.noteToUpdate.title],
      body: [this.noteToUpdate.body],
      createdDate: [this.noteToUpdate.createdDate]
    });

    this.form.controls['id'].disable();
  }

  submitForm() {
    var noteToUpdateDTO = {} as NoteCreateUpdateDTO;

    noteToUpdateDTO.title = this.form.get('title')!.value;
    noteToUpdateDTO.body = this.form.get('body')!.value;

    this.httpClient
      .put(`${API_ENDPOINTS.UPDATE_NOTE}/${this.noteToUpdate.id}`, noteToUpdateDTO, HTTP_OPTIONS)
      .subscribe({
        next: (response) => {
          this.updateSuccessful = true;

          let updatedNoteFromServer: Note = response as Note;

          let updatedNoteIndex = this.noteService.allNotes.findIndex((note => note.id == updatedNoteFromServer.id));

          this.noteService.allNotes[updatedNoteIndex].title = updatedNoteFromServer.title;
          this.noteService.allNotes[updatedNoteIndex].body = updatedNoteFromServer.body;
          this.noteService.allNotes[updatedNoteIndex].createdDate = updatedNoteFromServer.createdDate;

          console.log('Successfully updated the note! Response from server:');
          console.log(response);
        },
        error: (error: HttpErrorResponse) => {
          this.updateFailed = true;
          console.log(`Failed to update the note! Response from server: "HTTP statuscode: ${error.status}: ${error.error}"`);
        },
      });
  }
}
