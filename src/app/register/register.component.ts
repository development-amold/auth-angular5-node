import { Component } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../_services/authentication.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  credentials: TokenPayload = {
    email: '',
    name: '',
    password: ''
  };

  langs: string[] = [
    'English',
    'French',
    'German',
  ];

  angForm: FormGroup;
  name: FormControl;
  email: FormControl;
  password: FormControl;
  language: FormControl;

  constructor(private authService: AuthenticationService, private router: Router, private _flashMessageService: FlashMessagesService) {}

  ngOnInit() {
    this.createFormControls();
    this.createForm();    
  }

  createFormControls() {
    this.name = new FormControl('',[
      Validators.required
    ]);
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
      name: this.name,
      email: this.email,
      password: this.password,
      language: this.language
    });
  }  
  

  register() {
    this.authService.register(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/profile');
    }, (err) => {
      // console.error(err);
      this._flashMessageService.show(err.error.message, { cssClass: 'alert-danger', timeout: 3000 });
    });
  }
}