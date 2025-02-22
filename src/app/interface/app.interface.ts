export interface WORKOUT {
  type?: string;
  minutes?: number;
}

export interface USERDATA {
  id?: number;
  name?: string;
  workouts?: WORKOUT[];
  totalmin?: number;
}

export interface DATA {
  Username?: string;
  WorkoutType?: string;
  WorkoutMinutes?: number;
}

export interface USERDATAFORMTYPE {
  id?: number;
  type?: string;
  name?: string;
  placeholder?: string;
  required?: string;
  label?: string;
  workoutOptions?: string[];
}

export interface ToastConfig {
  position?: 'top' | 'bottom' | 'left' | 'right' | 'center';
  duration?: number; // in milliseconds
  animation?: 'fade' | 'slide' | 'none';
}

