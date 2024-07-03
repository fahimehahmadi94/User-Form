import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserDataService} from "../../core/services/user-data/user-data.service";
import {PersonalInfo, User} from "../../core/models/user-data.model";

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css'
})
export class PersonalInfoComponent implements OnInit {
  personalInfoFG !: FormGroup;
  firstNameFC!: FormControl;
  lastNameFC!: FormControl;
  nationalCodeFC!: FormControl;

  constructor(private fb: FormBuilder,
              private userDataService: UserDataService,
              private router: Router) {
  }

  ngOnInit() {
    const userData = this.userDataService.getUserData();
    this.setInitialData(userData);
  }

  setInitialData(userData: User): void {
    this.firstNameFC = this.fb.control(userData.personalInfo.firstName || '', [Validators.required]);
    this.lastNameFC = this.fb.control(userData.personalInfo.lastName || '', [Validators.required]);
    this.nationalCodeFC = this.fb.control(userData.personalInfo.nationalCode || '',
      [Validators.required, Validators.pattern(/^[0-9]{10}$/)]
    );

    this.personalInfoFG = this.fb.group({
      firstName: this.firstNameFC,
      lastName: this.lastNameFC,
      nationalCode: this.nationalCodeFC,
    });
  }

  onSubmit() {
    if (this.personalInfoFG.valid) {
      let personalInfo: PersonalInfo = {
        firstName: this.firstNameFC.value,
        lastName: this.lastNameFC.value,
        nationalCode: this.nationalCodeFC.value,
      }
      this.userDataService.setUserData({personalInfo});
      this.router.navigate(['/contact-info']).then();
    }
  }

  invalidInput(control: FormControl): boolean {
    return control.invalid && (control.touched || control.dirty);
  }
}
