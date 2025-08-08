import { Component, signal } from '@angular/core';
import { HeaderComponent } from "./components/header/header";
import { User } from "./components/user/user";
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from "./components/tasks/tasks";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-essentials');
  users = DUMMY_USERS;
  selectedUser: string | undefined;

  get selectedUserData() {
    return this.users.find(user => user.id === this.selectedUser);
  }

  onSelectUser(id: string) {
    this.selectedUser = id;
  }
}
