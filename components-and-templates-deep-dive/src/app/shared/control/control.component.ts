import {Component, input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control', // add the class to app-control whenever is being used ex: <app-control class="control"/>
    '(click)': 'onClick()'
  }
})
export class ControlComponent {
  label = input.required<string>()


  onClick() {
    console.log('clicked');
  }
}
