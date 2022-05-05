import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserSignUp } from '../classes/userSignUp';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  model = new UserSignUp('', '', '');

  constructor(private router: Router, public userService: UserService) {}

  onRegisterSubmit() {
    this.userService.registerUser(this.model).subscribe((res) => {
      if (res) {
        // this.flashMessagesService.show('User registered successfully', {
        //   cssClass: 'alert-success',
        //   timeout: 2500,
        // });
        this.router.navigate(['signIn']);
      } else {
        // this.flashMessagesService.show(res.msg, {
        //   cssClass: 'alert-danger',
        //   timeout: 2500,
        // });
        this.router.navigate(['signUp']);
      }
    });
  }

  ngOnInit(): void {}
}
