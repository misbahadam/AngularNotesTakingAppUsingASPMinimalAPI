import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import API_ENDPOINTS from 'src/app/constants/APIEndpoints';
import HTTP_OPTIONS from 'src/app/constants/HttpOptions';
import { NoteCreateUpdateDTO } from '../models/noteCUDto.model';
import { Note } from '../models/note.model';
import { NoteService } from '../services/note.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css'],
  providers: [DatePipe]
})

export class NoteCreateComponent {
  form!: FormGroup;

  createSuccessful: boolean = false;
  createFailed: boolean = false;
  datePipe: any;
  myDate: Date | undefined;

  constructor(public formBuilder: FormBuilder, private httpClient: HttpClient, public activeModal: NgbActiveModal, private noteService: NoteService) {
    this.form = this.formBuilder.group({
      title: ['Note Title'],
      body: ['Note Body'],
    });


}

  submitForm() {
    var noteToCreate = {} as NoteCreateUpdateDTO;

    noteToCreate.title = this.form.get('title')!.value;
    noteToCreate.body = this.form.get('body')!.value;
    //noteToCreate.createdDate = this.datePipe.transform(this.myDate, 'full');

    this.httpClient
      .post(API_ENDPOINTS.CREATE_NOTE, noteToCreate, HTTP_OPTIONS)
      .subscribe({
        next: (createdNoteFromServer) => {
          this.createSuccessful = true;

          this.noteService.allNotes.push(createdNoteFromServer as Note);

          console.log('Successfully created a note! Response from server:');
          console.log(createdNoteFromServer);
        },
        error: (error: HttpErrorResponse) => {
          this.createFailed = true;
          console.log(`Failed to create note! Response from server: "HTTP statuscode: ${error.status}: ${error.error}"`);
        },
      });
  }
}
