import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserDataService} from "../../core/services/user-data/user-data.service";
import {InitialUser, User} from "../../core/models/user-data.model";

@Component({
  selector: 'app-review-info',
  templateUrl: './review-info.component.html',
  styleUrl: './review-info.component.css'
})
export class ReviewInfoComponent implements OnInit {
  userData: User = InitialUser;
  isSuccessForm: boolean = false

  constructor(private userDataService: UserDataService,
              private router: Router) {
  }

  ngOnInit() {
    this.userData = this.userDataService.getUserData();
  }

  onSubmit() {
    if (this.userData.personalInfo.firstName &&
      this.userData.personalInfo.lastName &&
      this.userData.personalInfo.nationalCode &&
      this.userData.contactInfo.province &&
      this.userData.contactInfo.city &&
      this.userData.contactInfo.address &&
      this.userData.document) {
      this.isSuccessForm =  !this.isSuccessForm;
      setTimeout(() => {
        this.userDataService.clearData();
        this.router.navigate(['/personal-info']).then();
      }, 2000)
    }
  }

  isCheckValidForm(): boolean {
    return (!this.userData.personalInfo.firstName ||
      !this.userData.personalInfo.lastName ||
      !this.userData.personalInfo.nationalCode ||
      !this.userData.contactInfo.province ||
      !this.userData.contactInfo.city ||
      !this.userData.contactInfo.address ||
      !this.userData.document
    )
  }
}
