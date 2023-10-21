import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NoteCreateComponent } from './note-create/note-create.component';
import { NoteDeleteComponent } from './note-delete/note-delete.component';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'notes/create', component: NoteCreateComponent },
  { path: 'notes/:id/edit', component: NoteEditComponent },
  { path: 'notes/:id/delete', component: NoteDeleteComponent },
  { path: '', redirectTo: '/notes', pathMatch: 'full' }, // Redirect to the default route
  { path: '**', component: PageNotFoundComponent } // Handle 404 not found
];
@NgModule({
  imports: [RouterModule.forRoot(routes),
            ReactiveFormsModule,
            BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
