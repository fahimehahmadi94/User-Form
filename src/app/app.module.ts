import {NgModule} from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ContactInfoComponent} from './feature/contact-info/contact-info.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PersonalInfoComponent} from "./feature/personal-info/personal-info.component";
import {UploadDocumentsComponent} from "./feature/upload-documents/upload-documents.component";
import {ReviewInfoComponent} from "./feature/review-info/review-info.component";
import {ProgressBarComponent} from "./feature/progress-bar/progress-bar.component";


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
export class AppModule {
}
