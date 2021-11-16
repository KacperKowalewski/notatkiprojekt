import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';
import { DatePipe} from '@angular/common'

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NotesComponent } from './notes/notes.component';
import { HeaderComponent } from './header/header.component';
import { EditComponent } from './notes/edit/edit.component';


const appRoutes: Routes =[
  { path: 'notes', component: NotesComponent },
  { path: 'sing-in', component: SignInComponent },
  { path: 'sing-up', component: SignUpComponent },
  { path: 'notes/edit', component: EditComponent },

]

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SignUpComponent,
    SignInComponent,
    NotesComponent,
    HeaderComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
