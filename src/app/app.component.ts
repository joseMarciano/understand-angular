import {Component} from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {UserComponent} from "./user/user.component";
import {DUMMY_USERS} from "./dummy-users";
import {TasksComponent} from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected readonly USERS = DUMMY_USERS;
  currentUserId = this.USERS[0].id;


  get currentUser() {
    return this.USERS.find(user => user.id === this.currentUserId);
  }

  onSelectUser(id: string) {
    this.currentUserId = id
  }
}
