import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private router: Router) {}

  login() {
    if (this.username === 'touchworld' && this.password === 'touchworldTech') {
      this.router.navigate(['/employee-list']);
      alert("login successfull")
    } else {
      this.errorMessage = 'Invalid username or password!';
    }
  }
}
