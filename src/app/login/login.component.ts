import { Component, OnInit } from '@angular/core';
import { TokenPayload, AuthenticationService } from '../_services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials: TokenPayload = {
    email: '',
    password: ''
};  

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {

  }

  login() {
    this.authService.login(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/profile');
    }, (err) => {
      console.error(err);
    }); 
  }


}
