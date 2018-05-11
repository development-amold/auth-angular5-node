import { Component, OnInit } from '@angular/core';
import { ButtonService } from '../_services/button.service';
import { AuthenticationService } from '../_services/authentication.service';
import { HomeService } from '../_services/home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: any;

  constructor(private _buttonService: ButtonService, private authService: AuthenticationService, private _homeService: HomeService) {
    this._buttonService.changeHome(false);
    this.authService.isLoggedIn
    this._homeService.getUsers().subscribe(users => this.users = users)
   }

  ngOnInit() {
    
  }

}
