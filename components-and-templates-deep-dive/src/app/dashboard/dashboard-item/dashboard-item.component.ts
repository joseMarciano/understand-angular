import {Component, input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
  // host: { // in this case this approach will not work because of default encapsulation is ViewEncapsulation.Emulated
  //   class: 'dashboard-item'
  // }
})
export class DashboardItemComponent {
  image = input.required<{ src: string, alt: string }>();
  title = input.required<string>();

}
