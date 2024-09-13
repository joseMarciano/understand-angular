import {Component, computed, input, output} from '@angular/core';

type User = {
  id: string,
  name: string,
  avatar: string,
}

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user = input.required<User>()
  select = output<User>()
  imagePath = computed(() => `users/${this.user().avatar}`);

  onSelectUser() {
    this.select.emit(this.user())
  }
}
