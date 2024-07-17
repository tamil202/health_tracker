import { Injectable } from '@angular/core';
import { DATA, USERDATA, USERDATAFORMTYPE } from '../interface/app.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() {}

  // Add task -form-type/methods
  userDataInputFields: USERDATAFORMTYPE[] = [
    //   username
    {
      id: 1,
      type: 'text',
      name: 'Username',
      placeholder: 'eg : John',
      required: '*',
      label: 'User name',
    },
    //   workout type
    {
      id: 1,
      type: 'select',
      name: 'WorkoutType',
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
      label: 'Workout Type',
      required: '*',
    },
    // workout time
    {
      id: 1,
      type: 'number',
      name: 'WorkoutMinutes',
      placeholder: 'eg : 30',
      required: '*',
      label: 'Workout Minutes',
    },
  ];

  // default userdata values;
  userData: USERDATA[] = [
    {
      id: 1,
      name: 'John Doe',
      workouts: [
        { type: 'Running', minutes: 30 },
        { type: 'Cycling', minutes: 45 },
      ],
    },
    {
      id: 2,
      name: 'Jane Smith',
      workouts: [
        { type: 'Swimming', minutes: 60 },
        { type: 'Running', minutes: 20 },
      ],
    },
    {
      id: 3,
      name: 'Mike Johnson',
      workouts: [
        { type: 'Yoga', minutes: 50 },
        { type: 'Cycling', minutes: 40 },
      ],
    },
  ];

  // create user and task
  getUserData = (data: DATA): Observable<USERDATA[]> => {
    // get localstorage and parse the data
    const getitem: any = localStorage.getItem('userdata');
    const userdata = JSON.parse(getitem);
    // Find the highest current id
    const maxId: number = userdata.length
      ? userdata.reduce(
          (max: any, user: any) => Math.max(max, user.id),
          userdata[0].id
        )
      : 0;
    // Create the new user object
    const newUser = {
      id: maxId + 1,
      name: data.Username,
      workouts: [{ type: data.WorkoutType, minutes: data.WorkoutMinutes }],
    };
    // Add the new user to the userData array
    userdata.push(newUser);
    // Again change  JSON type and set localstorage
    const jsonModifiy = JSON.stringify(userdata);
    localStorage.setItem('userdata', jsonModifiy);
    return of(userdata);
  };
}
