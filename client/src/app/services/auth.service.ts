import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userIsAuthenticated: boolean = true;
  constructor() { }

  isUserAuthenticated(): boolean {
    return this.userIsAuthenticated;
  }

  setUserAuthentication(value: boolean) {
    this.userIsAuthenticated = value;
  }
}
