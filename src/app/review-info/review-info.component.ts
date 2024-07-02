import {Component, OnInit} from '@angular/core';
import {UserDataService} from "../services/user-data/user-data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-review-info',
  templateUrl: './review-info.component.html',
  styleUrl: './review-info.component.css'
})
export class ReviewInfoComponent implements OnInit {
  userData: any;

  constructor(private userDataService: UserDataService, private router: Router) {
  }

  ngOnInit() {
    this.userData = this.userDataService.getUserData();
  }

  onSubmit() {
    if (this.userData.firstName && this.userData.lastName && this.userData.nationalCode &&
      this.userData.province && this.userData.city && this.userData.address &&
      this.userData.document) {
      alert('Information submitted successfully!');
      this.userDataService.clearData();
      this.router.navigate(['/personal-info']).then();
    }
  }
}
