import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Serv } from '../service/serv';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl:'register.html',
  styleUrl:'register.css'
})
export class Register {
  name = '';
  username = '';
  password = '';
  error = '';

  constructor(private Serv: Serv, private router: Router) {}

  onRegister() {
    this.Serv.register({ name: this.name, username: this.username, password: this.password }).subscribe(registered=> {
      if (registered) {
        this.router.navigate(['login']);
      } else {
        this.error = 'Username already exists!!';
      }
    });
  }
}
