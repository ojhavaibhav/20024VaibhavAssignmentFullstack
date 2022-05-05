import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: any

  constructor(public AuthService: AuthService, public router: Router) {if(this.AuthService.loggedIn()){
    this.router.navigate(['ticket'])
  } }
  ngOnInit(): void {
     this.user = localStorage.getItem("user")
   
     if(this.user){
       this.AuthService.isloggedin = true
       this.router.navigate(['ticket'])
     }
  }

  onLogoutClick() {    
    this.AuthService.logout();
    this.AuthService.isloggedin = false;
    this.router.navigate(['/home']);
  }

}
