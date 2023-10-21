import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import API_ENDPOINTS from 'src/app/constants/APIEndpoints';
import HTTP_OPTIONS from 'src/app/constants/HttpOptions';
import { Note } from '../models/note.model';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-note-delete',
  templateUrl: './note-delete.component.html',
  styleUrls: ['./note-delete.component.css']
})
export class NoteDeleteComponent {
  noteToDelete!: Note;

  deleteSuccessful: boolean = false;
  deleteFailed: boolean = false;
  constructor(private noteService: NoteService, private httpClient: HttpClient, public activeModal: NgbActiveModal) {}

  onClickBtnDelete() {
    this.httpClient
      .delete(`${API_ENDPOINTS.DELETE_NOTE}/${this.noteToDelete.id}`, HTTP_OPTIONS)
      .subscribe({
        next: (response) => {
          this.deleteSuccessful = true;

          const index = this.noteService.allNotes.indexOf(this.noteToDelete);
          if (index > -1) {
            this.noteService.allNotes.splice(index, 1); // 2nd parameter means remove one item only
          }

          console.log('Successfully deleted the note! Response from server:');
          console.log(response);
        },
        error: (error: HttpErrorResponse) => {
          this.deleteFailed = true;
          console.log('Failed to delete the note! Error from server:');
          console.log(error);
        },
      });
  }
}
