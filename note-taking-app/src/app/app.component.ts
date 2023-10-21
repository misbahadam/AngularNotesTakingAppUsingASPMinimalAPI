import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NoteService } from './services/note.service';
import { Note } from './models/note.model';
import APIEndpoints from './constants/APIEndpoints';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { NoteCreateComponent } from './note-create/note-create.component';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { NoteDeleteComponent } from './note-delete/note-delete.component';
//import { GoogleAnalyticsService } from 'angular-ga';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'note-taking-app';

  modalOptions: NgbModalOptions = {
    size: 'lg'
  }



  constructor(private httpClient: HttpClient, public noteService: NoteService, private modalService: NgbModal) {}//, private gaService: GoogleAnalyticsService

  ngOnInit(): void {
    this.httpClient.get<Note[]>(APIEndpoints.GET_ALL_NOTES)
      .subscribe(response => {
        this.noteService.allNotes = response;
        console.log(this.noteService.allNotes);
      })
  }

  //trackPageView(pageName: string): void {
  //  this.gaService.pageview;
  //}

  //trackEvent(eventCategory: string, eventAction: string, eventLabel: string): void {
  //  this.gaService.event;
  //}

  onClickBtnCreateNewPost() {
    this.modalService.open(NoteCreateComponent, this.modalOptions);
    //this.trackEvent('Notes', 'Create', 'New Note Created');
  }

  onClickBtnUpdatePost(note: Note) {
    const modalRef = this.modalService.open(NoteEditComponent, this.modalOptions);

    modalRef.componentInstance.noteToUpdate = note;
    //this.trackEvent('Notes', 'Update', 'Note Updated');
  }

  onClickBtnDeletePost(note: Note) {
    const modalRef = this.modalService.open(NoteDeleteComponent, this.modalOptions);

    modalRef.componentInstance.noteToDelete = note;
    //this.trackEvent('Notes', 'Delete', 'Note Deleted');
  }
}
