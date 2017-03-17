import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class UserService {
  private loggedIn: boolean = false;

  constructor(private http: Http) {
    this.loggedIn = !! localStorage.getItem('auth_token');
  }

  login(email:String, password:String) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(
        '/login',
        JSON.stringify({ email, password }),
        { headers }
      )
      .map(res => res.json())
      .map(res => {
        if (res.success) {
          localStorage.setItem('auth_token', res.auth_token);
          this.loggedIn = true;
        }

        return res.success;
      });
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

}