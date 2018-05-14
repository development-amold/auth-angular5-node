import { Component, OnInit } from '@angular/core';
import { TokenPayload, AuthenticationService } from '../_services/authentication.service';
import { Router } from '@angular/router';
import { ButtonService } from '../_services/button.service';
import { FormGroup,  FormBuilder,  Validators, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';

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

  serverErrMsg: string;

  langs: string[] = [
    'English',
    'French',
    'German',
  ];
  
  angForm: FormGroup;
  email: FormControl;
  password: FormControl;
  language: FormControl;

  constructor(private authService: AuthenticationService, private router: Router, private _buttonService: ButtonService, private _flashMessageService: FlashMessagesService) {   
    _buttonService.changeHome(true);
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();    
  }

  createFormControls() {
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("^[A-Za-z0-9]+([\.-]?[a-zA-Z0-9]*)*@[a-zA-Z0-9]+([\.-]?[a-zA-Z0-9]+)*(\.[a-zA-Z0-9]{2,3})+$")  // \w does not work here

    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
    this.language = new FormControl('');
  }

  createForm() {
    this.angForm = new FormGroup({
      email: this.email,
      password: this.password,
      language: this.language
    });
  }  
   
  login() {
    this.authService.login(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/profile');
    }, (err) => {
      // console.error(err.message);
      this._flashMessageService.show(err.error.message, { cssClass: 'alert-danger', timeout: 3000 });
      this.serverErrMsg = err.error.message;
    }); 
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl("/");
  }  



}
