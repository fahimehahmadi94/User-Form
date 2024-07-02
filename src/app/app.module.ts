import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { UploadDocumentsComponent } from './upload-documents/upload-documents.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { ReviewInfoComponent } from './review-info/review-info.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoComponent,
    UploadDocumentsComponent,
    ContactInfoComponent,
    ReviewInfoComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
