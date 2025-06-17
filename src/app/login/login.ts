import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {Serv}from '../service/serv';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl:'login.html',
  styleUrl:'login.css'
})
export class Login {
  username = '';
  password = '';
  error = '';

  constructor(private Serv: Serv, private router: Router) {}

  onLogin() {
    this.Serv.login(this.username, this.password).subscribe(logged => {
      if (logged) {
        this.router.navigate(['home']);
      } else {
        this.error = 'Invalid credentials!';
      }
    });
  }
}

