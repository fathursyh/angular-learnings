import { Component, signal } from '@angular/core';
import { HeaderComponent } from "./components/header/header";
import { User } from "./components/user/user";
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-essentials');
  users = DUMMY_USERS;
}
