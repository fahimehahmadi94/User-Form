import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserDataService} from "../services/user-data/user-data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css'
})
export class PersonalInfoComponent implements OnInit {
  personalInfoForm !: FormGroup;

  constructor(private fb: FormBuilder,
              private userDataService: UserDataService,
              private router: Router) {
  }

  ngOnInit() {
    const userData = this.userDataService.getUserData();
    this.personalInfoForm = this.fb.group({
      firstName: [userData.firstName || '', Validators.required],
      lastName: [userData.lastName || '', Validators.required],
      nationalCode: [
        userData.nationalCode || '',
        [Validators.required, Validators.pattern(/^[0-9]{10}$/)]
      ]
    });
  }

  onSubmit() {
    if (this.personalInfoForm.valid) {
      this.userDataService.setUserData(this.personalInfoForm.value);
      this.router.navigate(['/upload-documents']).then();
    }
  }
}
