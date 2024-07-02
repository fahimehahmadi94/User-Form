import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PersonalInfoComponent} from "./personal-info/personal-info.component";
import {UploadDocumentsComponent} from "./upload-documents/upload-documents.component";
import {ContactInfoComponent} from "./contact-info/contact-info.component";
import {ReviewInfoComponent} from "./review-info/review-info.component";

const routes: Routes = [
  {path: 'personal-info', component: PersonalInfoComponent},
  {path: 'upload-documents', component: UploadDocumentsComponent},
  {path: 'contact-info', component: ContactInfoComponent},
  {path: 'review-info', component: ReviewInfoComponent},
  {path: '', redirectTo: '/personal-info', pathMatch: 'full'},
  {path: '**', redirectTo: '/personal-info'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
