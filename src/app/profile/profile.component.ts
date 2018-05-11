import { Component } from '@angular/core';
import { AuthenticationService, UserDetails } from '../_services/authentication.service';
import { Router } from '@angular/router';
import { ButtonService } from '../_services/button.service';

@Component({
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  details: UserDetails;

  constructor(private authService: AuthenticationService, private router: Router, private _buttonService: ButtonService) {
    this._buttonService.changeHome(true);
  }
  
  ngOnInit() {    
    this.authService.profile().subscribe(user => {
      this.details = user;
    }, (err) => {
      console.error(err);
    });
  }

}

