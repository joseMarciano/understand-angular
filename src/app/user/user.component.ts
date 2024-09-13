import {Component, computed, input} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  avatar = input.required<string>(); // not required input can be input<string>();
  name = input.required<string>();
  imagePath = computed(() => `users/${this.avatar()}`);

}
