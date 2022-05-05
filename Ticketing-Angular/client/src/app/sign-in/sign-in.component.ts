import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserLogin } from '../classes/userLogin';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  loginData = new UserLogin('', '');

  constructor(private authService: AuthService, private router: Router) {
    this.authService.isloggedin;
  }

  ngOnInit(): void {}

  onLoginSubmit() {
    this.authService.authenticateUser(this.loginData).subscribe((res) => {
      if (res) {
        this.authService.storeUserData(res.token, res.accessToken);
        this.authService.isloggedin = true;
        this.authService.user = res.accessToken;
        this.router.navigate(['ticket']);
      } else {
        this.router.navigate(['signIn']);
      }
    });
  }
}
