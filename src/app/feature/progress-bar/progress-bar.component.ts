import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css'
})
export class ProgressBarComponent {
  steps = [
    {label: 'Personal Information', route: '/personal-info'},
    {label: 'Upload Document', route: '/upload-documents'},
    {label: 'Contact Information', route: '/contact-info'},
    {label: 'Review Information', route: '/review-info'}
  ];

  constructor() {
  }
}
