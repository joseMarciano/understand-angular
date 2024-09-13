import {Component, computed, signal} from '@angular/core';
import {DUMMY_USERS} from "../dummy-users";

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[0]);
  imagePath = computed(() => `/users/${this.selectedUser().avatar}`)
}
