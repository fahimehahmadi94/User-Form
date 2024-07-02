import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserDataService} from "../../core/services/user-data/user-data.service";

@Component({
  selector: 'app-upload-documents',
  templateUrl: './upload-documents.component.html',
  styleUrl: './upload-documents.component.css'
})
export class UploadDocumentsComponent implements OnInit {
  document: File | null = null;
  documentUrl: string | ArrayBuffer | null = null;
  documentError: string | null = null;
  userData: any;

  constructor(private userDataService: UserDataService,
              private router: Router) {
  }

  ngOnInit() {
    this.userData = this.userDataService.getUserData();
    if (!!this.userData.document) {
      this.documentUrl = this.userData.document;

    }
  }

  onFileSelected(event: any) {
    this.document = event.target.files[0];
    if (this.document) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (this.document?.type === 'image/png' ||
          this.document?.type === 'image/jpg' ||
          this.document?.type === 'image/jpeg' ||
          this.document?.type === 'image/gif') {
          this.documentUrl = reader.result;
          this.documentError = null;
        } else {
          this.document = null
          this.documentUrl = null;
          this.documentError = 'Please select a document.';
        }
      };
      reader.readAsDataURL(this.document);
    } else {
      this.documentError = 'Please select a document.';
    }
  }

  onSubmit() {
    if (this.document) {
      const reader = new FileReader();
      reader.onload = () => {
        this.userDataService.setUserData({document: reader.result});
        this.router.navigate(['/contact-info']).then();
      };
      reader.readAsDataURL(this.document);
    } else {
      this.documentError = 'Please select a document.';
    }
  }
}
