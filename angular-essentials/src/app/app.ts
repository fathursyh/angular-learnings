import { Component, signal } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { HeaderComponent } from './header/header';
import { User } from './user/user';
import { Tasks } from './tasks/tasks';

@Component({
  selector: 'app-root',
  // imports: [HeaderComponent, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: false,
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
