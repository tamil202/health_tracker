import { Component, ViewEncapsulation } from '@angular/core';
import { AppService } from '../../services/app.service';
import { USERDATA } from '../../interface/app.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class SearchComponent {
  constructor(private appservice: AppService) {}

  workoutOptions: string[] = [
    'All',
    'Running',
    'Swimming',
    'Yoga',
    'Cycling',
    'Weightlifting',
    'Pilates',
    'HIIT',
    'Boxing',
    'Dancing',
    'Hiking',
    'Rowing',
    'CrossFit',
    'Martial Arts',
    'Climbing',
    'Stretching',
  ];
  data: USERDATA[] = [];
  dataCpy: USERDATA[] = [];
  ngOnInit(): void {
    if (this.appservice.getItem() && this.appservice.getItem().length) {
      this.data = this.appservice.getItem();
      this.dataCpy = this.appservice.getItem();
      console.log(this.data);
    } else {
      console.log('No Data Found');
    }
  }
  // search
  searchInput!: string;
  selectInput: any = 'All';
  ngDoCheck(): void {
    if (this.searchInput) {
      const data = this.dataCpy.filter(
        (getItem) =>
          getItem.name
            ?.toLocaleLowerCase()
            ?.includes(this.searchInput.trim().toLocaleLowerCase()) ||
          getItem.totalmin === parseInt(this.searchInput)
      );
      this.data = data;
    } else {
      this.data = this.dataCpy;
    }
  }

  // filter
  filter = (): void => {
    let data;
    this.dataCpy.filter((item) => {
      data = item.workouts?.map(
        (workout) =>
          workout.type?.toLocaleLowerCase().includes( 
          this.selectInput.toLocaleLowerCase())
      );
    });
    console.log(data);
  };
}
