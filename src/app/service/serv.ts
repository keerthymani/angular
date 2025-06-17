import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

export interface User {
  name: string;
  username: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class Serv {
  private key = 'users';
  private currentUser = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUser.asObservable();

  private getUsers(): User[] {
    return JSON.parse(localStorage.getItem(this.key) || '[]');
  }

  register(user: User): Observable<boolean> {
    const users = this.getUsers();
    if (users.find(u => u.username === user.username)) return of(false);
    users.push(user);
    localStorage.setItem(this.key, JSON.stringify(users));
    return of(true);
  }

  login(username: string, password: string): Observable<boolean> {
    const user = this.getUsers().find(u => u.username === username && u.password === password);
    if (user) {
      this.currentUser.next(user);
      return of(true);
    }
    return of(false); 
  }

}
