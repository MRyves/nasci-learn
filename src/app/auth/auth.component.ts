import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../core/services';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  // The type of the user action: either login or register
  authType = '';

  // Depending on the type, change the title on the page
  title = '';

  isSubmitting = false;
  authForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    // use FormBuilder to create a form group
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.url.subscribe(data => {
      // Get the last piece of the URL (it's either 'login' or 'register')
      this.authType = data[data.length - 1] ? data[data.length - 1].path : 'login';
      // Set a title for the page accordingly
      this.title = (this.authType === 'login') ? 'Sign in' : 'Sign up';
      // add form control for username if this is the register page
      if (this.authType === 'register') {
        this.authForm.addControl('username', new FormControl('', Validators.required));
        this.authForm.addControl('password-retype', new FormControl('', Validators.required));
      }
    });
  }

  submitForm() {
    this.isSubmitting = true;

    const credentials = this.authForm.value;
    if (this.authType === 'register' && credentials.password !== credentials['password-retype']) {
      this.handleInvalidPassword();
      return; // exit method
    }

    this.userService
      .attemptAuth(this.authType, credentials)
      .subscribe(
        data => {
          this.router.navigateByUrl('/');
        },
        err => {
          console.log(err);
          this.isSubmitting = false;
        }
      );
  }

  private handleInvalidPassword() {
    this.isSubmitting = false;
    this.authForm.controls.password.setValue('');
    this.authForm.controls['password-retype'].setValue('');
  }
}
