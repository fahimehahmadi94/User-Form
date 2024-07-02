import {Component, OnInit} from '@angular/core';

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

  constructor() {
  }
}
