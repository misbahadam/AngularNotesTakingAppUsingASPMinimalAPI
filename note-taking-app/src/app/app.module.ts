import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteDeleteComponent } from './note-delete/note-delete.component';
import { NoteCreateComponent } from './note-create/note-create.component';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { GoogleAnalyticsModule, GoogleAnalyticsService } from 'angular-ga';


@NgModule({
  declarations: [
    AppComponent,
    NoteDeleteComponent,
    NoteCreateComponent,
    NoteEditComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [//GoogleAnalyticsService,
    //{ provide: 'gaTrackingId', useValue: '412715614' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
