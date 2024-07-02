import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private userData: any = {};

  constructor() {
    if (this.isLocalStorageAvailable()) {
      const savedData = localStorage.getItem('userData');
      if (savedData) {
        this.userData = JSON.parse(savedData);
      }
    }
  }

  setUserData(data: any) {
    this.userData = { ...this.userData, ...data };
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem('userData', JSON.stringify(this.userData));
    }
  }

  getUserData() {
    return this.userData;
  }

  clearData() {
    this.userData = {};
    if (this.isLocalStorageAvailable()) {
      localStorage.removeItem('userData');
    }
  }

  private isLocalStorageAvailable(): boolean {
    try {
      const test = '__localStorage_test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }
}
