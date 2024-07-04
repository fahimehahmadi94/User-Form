import {NgModule} from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


import {ContactInfoComponent} from './feature/contact-info/contact-info.component';
import {PersonalInfoComponent} from "./feature/personal-info/personal-info.component";
import {UploadDocumentComponent} from "./feature/upload-document/upload-document.component";
import {ReviewInfoComponent} from "./feature/review-info/review-info.component";
import {TabsComponent} from "./feature/tabs/tabs.component";
import {StepperComponent} from "./feature/stepper/stepper.component";
import {MatStepperModule} from "@angular/material/stepper";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoComponent,
    UploadDocumentComponent,
    ContactInfoComponent,
    ReviewInfoComponent,
    TabsComponent,
    StepperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    MatStepperModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
