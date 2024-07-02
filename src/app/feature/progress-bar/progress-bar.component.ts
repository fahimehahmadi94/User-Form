import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css'
})
export class ProgressBarComponent {
  steps = [
    {label: 'Personal Information', route: '/personal-info'},
    {label: 'Contact Information', route: '/contact-info'},
    {label: 'Upload Document', route: '/upload-documents'},
    {label: 'Review Information', route: '/review-info'}
  ];

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) {}

}
