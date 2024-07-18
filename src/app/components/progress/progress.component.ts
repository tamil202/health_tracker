import { Component, ViewEncapsulation } from '@angular/core';
import { AppService } from '../../services/app.service';
import { USERDATA, WORKOUT } from '../../interface/app.interface';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './progress.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ProgressComponent {
  constructor(private appservice: AppService) {}

  data: USERDATA[] = [];
  ngOnInit(): void {
    const getItem = this.appservice.getItem();
    if (!getItem) {
      return console.log('No data found');
    }
    this.data = getItem;
  }

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  xAxisLabel = 'Health Trakker';
  showYAxisLabel = false;
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  // isClcik
  isClick = (item: USERDATA) => {
    let objCpy: any = [];
    item.workouts?.forEach((work: WORKOUT) => {
      let obj = { name: work.type, value: work.minutes };
      objCpy.push(obj);
    });
    this.single = objCpy;
  };

  // Default values to show in graph
  single: any = [
    {
      name: 'null',
      value: 10,
    },
    {
      name: 'None',
      value: 20,
    },
  ];
}
