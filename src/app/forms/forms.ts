import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forms.html',
  styleUrl: './forms.css',
})
export class Forms {
  user = { name: '', email: '', age: null };

  users: any[] = [];
onRegister(form: NgForm) {
    if (form.invalid) {
      alert("Your Form is invalid.Please fill all the required fields");
      return;
    }

    this.users.push({ ...this.user });

    this.user = {
      name: '',
      email: '',
      age: null
    };

    form.resetForm();
  }
}
