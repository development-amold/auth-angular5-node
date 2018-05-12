import { Component, OnInit } from '@angular/core';
import { ButtonService } from '../_services/button.service';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private _buttonService: ButtonService, private _authService: AuthenticationService) { 
    this._authService.isLoggedIn()
  }

  ngOnInit() {
  }

}
