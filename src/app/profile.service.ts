import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private user = new BehaviorSubject<User>(null);
  private storageKey = 'user';

  constructor() {
    this.initialize();
  }

  add(user: User) {
    this.user.next(user);
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.user.value));
  }

  initialize() {
    const user = localStorage.getItem(this.storageKey);
    if (user) {
      this.user.next(JSON.parse(user));
    } else {
      this.user.next({});
    }
  }

  getUser(): Observable<User> {
    return this.user.asObservable();
  }
}
