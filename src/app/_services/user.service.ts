import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { User } from '../_models/user';

@Injectable()
export class UserService {

  constructor(private http: Http, private authenticationService: AuthenticationService) { }

  getUsers(): Observable<User[]>{
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    let httpOptions = new RequestOptions({ headers: headers });    
    return this.http.get("/api/users/",httpOptions).map((response: Response) => response.json());
  }

}
