import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserDataService} from "../../core/services/user-data/user-data.service";

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.css'
})
export class ContactInfoComponent implements OnInit {
  contactInfoForm !: FormGroup;

  constructor(private fb: FormBuilder,
              private userDataService: UserDataService,
              private router: Router) {
  }

  ngOnInit() {
    const userData = this.userDataService.getUserData();
    this.contactInfoForm = this.fb.group({
      province: [userData.contactInfo.province || '', Validators.required],
      city: [userData.contactInfo.city || '', Validators.required],
      address: [userData.contactInfo.address || '', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactInfoForm.valid) {
      this.userDataService.setUserData(this.contactInfoForm.value);
      this.router.navigate(['/review-info']).then();
    }
  }
}
