import { Component ,OnInit} from '@angular/core';
import { User } from './../models/user';
import { loginService } from './../factory/loginService';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
     animations: [
    trigger('login', [
      transition('void => *', [
        style({ transform: 'rotate3d(0, 1, 0, 90deg)' }),
        animate(400)
      ]),
      transition('* => void', [
        animate(400, style({ transform: 'rotate3d(0, 1, 0, 180deg)' }))
      ])
    ])
  ]
})
export class LoginComponent {
    user: User = new User();
    formlogin: FormGroup;
  constructor(private formBuilder: FormBuilder, private loginService: loginService) {}
  ngOnInit(){
    this.formlogin = this.formBuilder.group({
      username: [null, [Validators.required, Validators.pattern("[a-zA-Z0-9_.-]*")]],
      password: [null, [Validators.required, Validators.minLength(8)]],
    });
  }
  onLogin() {
    // console.log(this.formlogin.value);
      this.loginService.login(this.formlogin.value).then(dt => {
        this.user = dt;
        console.log(this.user);
      })
        .catch((err) => {
          console.log(err);
        });
      this.formlogin.reset();
  }
  // onLogin(): void {
  //   this.auth.login(this.user)
  //   .then((user) => {
  //     localStorage.setItem('token', user.json().auth_token);
  //     this.router.navigateByUrl('/status');
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  //   }
}
