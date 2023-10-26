import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { IUserRegister } from 'src/app/shared/interfaces/IUserRegister';
import { PasswordsMatchValidator } from 'src/app/shared/validators/password_match_validators';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  registerForm!: FormGroup;
  isSubmitted = false;

  returnUrl = '';
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', Validators.required],
      address: ['', [Validators.required, Validators.minLength(10)]]
    }, {
      validators: PasswordsMatchValidator('password', 'confirmPassword')
    });

    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
  }

  //formControl-formcontrol
  get formControl() {
    return this.registerForm.controls;
  }

  //formValue - form value
  // submit(){
  //   this.isSubmitted = true;
  //   if(this.registerForm.invalid) return;

  //   const formValue= this.registerForm.value;
  //   const user :IUserRegister = {
  //     name: formValue.name,
  //     email: formValue.email,
  //     password: formValue.password,
  //     confirmPassword: formValue.confirmPassword,
  //     address: formValue.address
  //   };

  //   this.userService.register(user).subscribe(_ => {
  //     this.router.navigateByUrl(this.returnUrl);
  //   })
  // }
  submit() {
    this.isSubmitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    const user = this.registerForm.value;
    this.userService.register(user).subscribe(
      (response) => {
        // Handle successful registration, e.g., show a success message, redirect, or perform other actions.
        console.log('Registration successful:', response);
      },
      (error) => {
        // Handle registration error, e.g., show an error message.
        console.error('Registration failed:', error);
        console.log('Error status:', error.status);
        console.log('Error message:', error.message);
        console.log('Error response:', error.error);
      }
    );
  }

}