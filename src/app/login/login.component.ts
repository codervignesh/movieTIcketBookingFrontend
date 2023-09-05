import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) { }

  login() {
    // You can implement your authentication logic here
    // For simplicity, let's assume a hardcoded check
    if (this.email === 'test@email.com' && this.password === 'password') {
      this.router.navigate(['/home']);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  }
}
