import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserDataService} from "./core/services/user-data/user-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title: string = 'userRegistration';


  personalInfoFormGroup !: FormGroup;
  uploadDocumentsFormGroup!: FormGroup;
  contactInfoFormGroup !: FormGroup;

  constructor(private _formBuilder: FormBuilder, private userDataService: UserDataService) { }

  ngOnInit() {
    const userData = this.userDataService.getUserData();

    this.personalInfoFormGroup = this._formBuilder.group({
      firstName: [userData.personalInfo.firstName || '', Validators.required],
      lastName: [userData.personalInfo.lastName || '', Validators.required],
      nationalCode: [userData.personalInfo.nationalCode || '', Validators.required]
    });

    this.uploadDocumentsFormGroup = this._formBuilder.group({
      document: [userData.document || '', Validators.required]
    });

    this.contactInfoFormGroup = this._formBuilder.group({
      province: [userData.contactInfo.province || '', Validators.required],
      city: [userData.contactInfo.city || '', Validators.required],
      address: [userData.contactInfo.address || '', Validators.required]
    });
  }

  onSubmit() {
    const personalInfo = this.personalInfoFormGroup.value;
    const uploadDocuments = this.uploadDocumentsFormGroup.value;
    const contactInfo = this.contactInfoFormGroup.value;

    this.userDataService.setUserData({
      ...personalInfo,
      ...uploadDocuments,
      ...contactInfo
    });

    console.log('Form submitted:', {
      ...personalInfo,
      ...uploadDocuments,
      ...contactInfo
    });
  }
}
