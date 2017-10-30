
import {
  Component
} from '@angular/core';

@Component ({
  selector: 'binding',
  templateUrl: 'app/binding.component.html'
})

export class BindingComponent {
  property: string = 'Angular JS2';
  lijst: string[] = ["binding 1", "binding 2", "binding 3"];
}
