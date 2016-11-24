import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  private authUrl: string = 'http://reqres.in/api';
  private loggedIn: boolean = false;
  
  constructor(private http: Http) {
    // look at localStorage to check if the user is logged in
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  /**
   * Check if the user is logged in
   */
  isLoggedIn() {
    return this.loggedIn;
  }

  /**
   * Log the user in
   */
  login(username: string, password: string): Observable<string> {
    return this.http.post(`${this.authUrl}/login`, { username, password })
      .map(res => res.json())
      .do(res => {
        if (res.token) localStorage.setItem('auth_token', res.token);
      })
      .catch(this.handleError);
  }

  /**
   * Handle any errors from the API
   */
  private handleError(err) {
    let errMessage: string;

    if (err instanceof Response) {
      let body   = err.json() || '';
      let error  = body.error || JSON.stringify(body);
      errMessage = `${err.status} - ${err.statusText || ''} ${error}`;
    } else {
      errMessage = err.message ? err.message : err.toString();
    }

    return Observable.throw(errMessage);
  }

}