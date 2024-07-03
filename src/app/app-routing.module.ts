import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PersonalInfoComponent} from "./feature/personal-info/personal-info.component";
import {UploadDocumentComponent} from "./feature/upload-document/upload-document.component";
import {ContactInfoComponent} from "./feature/contact-info/contact-info.component";
import {ReviewInfoComponent} from "./feature/review-info/review-info.component";

const routes: Routes = [
  {path: 'personal-info', component: PersonalInfoComponent},
  {path: 'upload-document', component: UploadDocumentComponent},
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
