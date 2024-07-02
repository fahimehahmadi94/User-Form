import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css'
})
export class ProgressBarComponent implements OnInit {
  steps = [
    { label: 'اطلاعات فردی', route: '/personal-info' },
    { label: 'آپلود مدارک', route: '/upload-documents' },
    { label: 'اطلاعات تماس', route: '/contact-info' },
    { label: 'مرور اطلاعات', route: '/review-info' }
  ];
  currentRoute: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
      }
    });
  }

  isActive(route: string): boolean {
    return this.currentRoute === route;
  }
}
