import { Component, signal, ViewEncapsulation } from '@angular/core';
import { add_task, seacr_task, progress } from './export';
import { AppService } from './services/app.service';
import { single } from 'rxjs';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [add_task, seacr_task, progress],
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  constructor(private appservice: AppService) {
    const jsonModifiy = JSON.stringify(this.appservice.userData);
    localStorage.setItem('userdata', jsonModifiy);
  }

  isSwitch = signal<number>(2);
  isClick = (number: number): void => {
    this.isSwitch.set(number);
  };
}
