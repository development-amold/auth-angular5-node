import { Component } from '@angular/core';
import { AuthenticationService, UserDetails } from '../_services/authentication.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  details: UserDetails;

  constructor(private authService: AuthenticationService, private router: Router) {}
  
  ngOnInit() {    
    this.authService.profile().subscribe(user => {
      this.details = user;
    }, (err) => {
      console.error(err);
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl("/");
  }  

}

