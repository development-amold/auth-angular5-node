import { Component } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../_services/authentication.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  credentials: TokenPayload = {
    email: '',
    name: '',
    password: ''
  };

  constructor(private authService: AuthenticationService, private router: Router) {}

  register() {
    this.authService.register(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/profile');
    }, (err) => {
      console.error(err);
    });
  }
}