import {Component} from '@angular/core';

interface NavList {
  name: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})

export class TabsComponent {
  navList: NavList[] = [
    {name: 'Personal Information', route: '/personal-info', icon: 'fa-info'},
    {name: 'Contact Information', route: '/contact-info', icon: 'fa-address-book'},
    {name: 'Upload Document', route: '/upload-document', icon: 'fa-upload'},
    {name: 'Review Information', route: '/review-info', icon: 'fa-address-card-o'},
  ];
}
