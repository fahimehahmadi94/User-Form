import {Component} from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {
  steps = [
    {label: 'Personal Information', route: '/personal-info'},
    {label: 'Contact Information', route: '/contact-info'},
    {label: 'Upload Document', route: '/upload-document'},
    {label: 'Review Information', route: '/review-info'}
  ];

}
