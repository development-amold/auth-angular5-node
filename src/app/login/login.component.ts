import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  modelHash: any = {};
  loading = false;
  error = '';
  
  constructor(private router: Router, private authService: AuthenticationService) { }

  ngOnInit() {
    this.authService.logout();
  }

  login(){
    this.loading = true;
    this.authService.login(this.modelHash.username,this.modelHash.password)
    .subscribe(result => {
      if(result == true)
      {
        this.router.navigate(["/"]);
      }
      else
      {
        this.error = "Username or password incorrect."
        this.loading = false;
      }
    });
  }


}
