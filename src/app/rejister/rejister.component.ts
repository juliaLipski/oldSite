import { Component, Input } from '@angular/core';
import { User } from './../models/user';
import { userService } from './../factory/userService';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-rejister',
  templateUrl: './rejister.component.html',
  styleUrls: ['./rejister.component.css']
})

export class rejisterComponent {
  user: User = new User();
  form: FormGroup;
  currentUser: string;
  currentMessage: string;
  showDialog = false;
  constructor(private formBuilder: FormBuilder, private userService: userService) {

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: [null, [Validators.required, Validators.pattern("[a-zA-Z0-9_.-]*")]],
      password: [null, [Validators.required, Validators.minLength(8)]],
    });
  }
  isFieldValid(field: string) {
    return !this.form.get(field).valid && this.form.get(field).touched;
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }

  onSubmit() {
    console.log(this.form);
    if (this.form.valid) {
      this.userService.create(this.form.value).then(dt => {
        this.user = dt;
        this.setMess(this.user)
      })
        .catch((err) => {
          this.user = undefined;
          this.setMess(this.user);
          console.log(err);
        });
      this.showDialog = true;
      this.form.reset();

    } else {
      this.validateAllFormFields(this.form);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      console.log(field);
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  private setMess(user) {
    console.log(this.user);
    if (user == undefined) {
      this.currentMessage = 'error!!! try it again!!'
    } else {
      this.currentUser = user.username;
      this.currentMessage = ', is registered!!!';
    }
  }

  reset() {
    this.form.reset();
  }
  // {email: '...', password: '...'}
  // ... <-- now use JSON.stringify() to convert form values to json.

  // constructor(private router: Router, private auth: AuthenticationService) {}
  // onRegister(): void {
  //   this.auth.register(this.user)
  //   .then((user) => {
  //     localStorage.setItem('token', user.json().auth_token);
  //     this.router.navigateByUrl('/status');
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  // }

}

