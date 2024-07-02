import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserDataService} from "../../core/services/user-data/user-data.service";
import {ContactInfo, User} from "../../core/models/user-data.model";

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.css'
})
export class ContactInfoComponent implements OnInit {
  contactInfoFG !: FormGroup;
  provinceFC!: FormControl;
  cityFC!: FormControl;
  addressFC!: FormControl;

  constructor(private fb: FormBuilder,
              private userDataService: UserDataService,
              private router: Router) {
  }

  ngOnInit() {
    const userData = this.userDataService.getUserData();
    this.setInitialData(userData);
  }

  setInitialData(userData: User): void {
    this.provinceFC = this.fb.control(userData.contactInfo.province || '', Validators.required);
    this.cityFC = this.fb.control(userData.contactInfo.city || '', Validators.required);
    this.addressFC = this.fb.control(userData.contactInfo.address || '', Validators.required);

    this.contactInfoFG = this.fb.group({
      province: this.provinceFC,
      city: this.cityFC,
      address: this.addressFC,
    });
  }

  onSubmit() {
    if (this.contactInfoFG.valid) {
      let contactInfo: ContactInfo = {
        province: this.provinceFC.value,
        city: this.cityFC.value,
        address: this.addressFC.value,
      }
      this.userDataService.setUserData({contactInfo});
      this.router.navigate(['/review-info']).then();
    }
  }

  invalidInput(control: FormControl): boolean {
    return control.invalid && (control.touched || control.dirty);
  }
}
