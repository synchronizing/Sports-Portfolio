import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { TokenStorage } from './token.storage';
import { TooltipComponent } from '@angular/material';

@Injectable()
export class AuthService {

  constructor(private http : HttpClient, private token: TokenStorage) {}

  public $userSource = new Subject<any>();

  login(email : string, password : string) : Observable <any> {
    return Observable.create(observer => {
      this.http.post('/api/auth/login', {
        email,
        password
      }).subscribe((data : any) => {
          alert("subbing!!!");
          observer.next({user: data.user});
          this.setUser(data.user);
          this.token.saveToken(data.token);
          observer.complete();
      }, err => alert("Invalid login, try again!"))
    });
  }

  register(fullname : string, email : string, password : string, repeatPassword : string) : Observable <any> {
    return Observable.create(observer => {
      this.http.post('/api/auth/register', {
        fullname,
        email,
        password,
        repeatPassword
      }).subscribe((data : any) => {
        observer.next({user: data.user});
        this.setUser(data.user);
        this.token.saveToken(data.token);
        observer.complete();
      }, err => alert("Couldn't register, try again!"))
    });
  }

  setUser(user): void {
    if (user) user.isAdmin = (user.roles.indexOf('admin') > -1);
    this.$userSource.next(user);
    (<any>window).user = user;
  }

  getUser(): Observable<any> {
    return this.$userSource.asObservable();
  }

  me(): Observable<any> {
    return Observable.create(observer => {
      const tokenVal = this.token.getToken();
      if (!tokenVal) return  observer.complete();
      this.http.get('/api/auth/me').subscribe((data : any) => {
        observer.next({user: data.user});
        this.setUser(data.user);
        observer.complete();
      })
    });
  }

  signOut(): void {
    this.token.signOut();
    this.setUser(null);
    delete (<any>window).user;
  }
}
