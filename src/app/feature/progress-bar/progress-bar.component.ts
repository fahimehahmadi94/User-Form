import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css'
})
export class ProgressBarComponent {
  steps = [
    {label: 'اطلاعات فردی', route: '/personal-info'},
    {label: 'آپلود مدارک', route: '/upload-documents'},
    {label: 'اطلاعات تماس', route: '/contact-info'},
    {label: 'مرور اطلاعات', route: '/review-info'}
  ];

  constructor() {
  }
}
