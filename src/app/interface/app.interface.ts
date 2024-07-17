export interface WORKOUT {
  type?: string;
  minutes?: number;
}

export interface USERDATA {
  id?: number;
  name?: string;
  workouts?: [WORKOUT];
}

export interface USERDATAFORMTYPE {
  id?: number;
  type?: string;
  name?: string;
  placeholder?: string;
  required?: string;
  workoutOptions?: string[];
}
