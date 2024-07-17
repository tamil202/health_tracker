import { Injectable } from '@angular/core';
import { USERDATAFORMTYPE } from '../interface/app.interface';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() {}

  // Add task -form-type/methods
  userData: USERDATAFORMTYPE[] = [
    //   username
    {
      id: 1,
      type: 'text',
      name: 'User name',
      placeholder: 'eg : John',
      required: '*',
    },
    //   workout type
    {
      id: 1,
      type: 'select',
      name: 'Workout Type',
      placeholder: 'eg : Running',
      workoutOptions: [
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
      ],
      required: '*',
    },
    // workout time
    {
      id: 1,
      type: 'number',
      name: 'Workout Minutes',
      placeholder: 'eg : 30',
      required: '*',
    },
  ];
}
