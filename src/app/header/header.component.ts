import { Component, OnInit } from '@angular/core';
import { ButtonService } from '../_services/button.service';
import { AuthenticationService } from '../_services/authentication.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  isHomeButtonVisible: boolean;
  isLoginButtonVisible: boolean = true;

  constructor(private _buttonService: ButtonService, private authService: AuthenticationService, private router: Router){
    _buttonService.homeCurrentButton.subscribe(status => this.isHomeButtonVisible = status);
    _buttonService.loginCurrentButton.subscribe(status => {status == false ? this.isLoginButtonVisible = true : this.isLoginButtonVisible = false} );
  }

  ngOnInit() {
  }

  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl("/");
  }    

}
