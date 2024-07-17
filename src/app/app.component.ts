import { Component, ViewEncapsulation } from '@angular/core';
import { add_task, seacr_task, progress } from './export';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [add_task, seacr_task, progress],
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  constructor() {}
}
