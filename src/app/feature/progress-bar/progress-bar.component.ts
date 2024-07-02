import { Component } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css'
})
export class ProgressBarComponent {
  currentStep: number = 1;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.setCurrentStep(event.url);
      }
    });
  }

  setCurrentStep(url: string) {
    if (url.includes('personal-info')) {
      this.currentStep = 1;
    } else if (url.includes('upload-documents')) {
      this.currentStep = 2;
    } else if (url.includes('contact-info')) {
      this.currentStep = 3;
    } else if (url.includes('review-info')) {
      this.currentStep = 4;
    }
  }

  isCurrentStep(step: number) {
    return this.currentStep >= step;
  }
}
