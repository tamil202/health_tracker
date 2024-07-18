import { Component, ViewEncapsulation } from '@angular/core';
import { AppService } from '../../services/app.service';
import { USERDATA } from '../../interface/app.interface';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, NgxPaginationModule],
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
    this.paginationSizeGenrator();
  }
  // search
  searchInput!: string;
  selectInput: any = 'All';
  search = (): void => {
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
  };
  // filter
  filter = (): void => {
    if (this.selectInput.toLocaleLowerCase() === 'all') {
      this.data = this.appservice.getItem();
    } else {
      let filterbyworktype = this.dataCpy.filter((item) => {
        return item.workouts?.some((work) =>
          work.type
            ?.toLocaleLowerCase()
            .includes(this.selectInput.trim().toLocaleLowerCase())
        );
      });
      this.data = filterbyworktype;
    }
  };
  // pagination
  ps: number = 3;
  p: number = 1;
  collection: any[] = this.data;
  pagiantionSelect: any = 3;
  paginationListSize = 5;
  paginationListNumber: number[] = [];
  // pagination list-number
  paginationSizeGenrator = (): void => {
    for (let index = 0; index < this.paginationListSize; index++) {
      this.paginationListNumber.push(index + 1);
    }
  };
  isPagante = (): void => {
    this.ps = parseInt(this.pagiantionSelect);
  };
}
