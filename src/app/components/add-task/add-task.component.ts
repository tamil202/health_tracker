import { CommonModule } from '@angular/common';
import { AppService } from '../../services/app.service';
import { Component, ViewEncapsulation } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ToastrService } from 'ngx-toastr';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { USERDATA, USERDATAFORMTYPE } from '../../interface/app.interface';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
  ],
  templateUrl: './add-task.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AddTaskComponent {
  constructor(private appservice: AppService, private toaster: ToastrService) {}

  data: USERDATAFORMTYPE[] = [];
  workOutList: USERDATA[] = [];
  // form
  formData: FormGroup = new FormGroup({});
  // make form dynamic
  ngOnInit(): void {
    if (
      this.appservice.userDataInputFields &&
      this.appservice.userDataInputFields.length
    ) {
      this.data = this.appservice.userDataInputFields; // copying data
      this.appservice.userDataInputFields.forEach((item: any) => {
        this.formData.addControl(
          item.name,
          new FormControl('', [Validators.required])
        );
      });
    }
  }

  // data store in object
  obj: any = {
    name,
    workouts: [],
  };
  //  add  more workout
  isAddWorkOut = (): void => {
    this.obj.name = this.formData.get('Username')?.value;
    let addwokout: any = {
      type: this.formData.get('WorkoutType')?.value,
      minutes: parseInt(this.formData.get('WorkoutMinutes')?.value),
    };
    this.obj.workouts.push(addwokout);
    this.formData.get('WorkoutType')?.reset();
    this.formData.get('WorkoutMinutes')?.reset();
  };

  isSubmit = (): void => {
    // onlye one value Add
    if (!this.obj.name || !this.obj.workout) {
      this.obj.name = this.formData.get('Username')?.value;
      let addwokout: any = {
        type: this.formData.get('WorkoutType')?.value,
        minutes: parseInt(this.formData.get('WorkoutMinutes')?.value),
      };
      this.obj.workouts.push(addwokout);
      this.appservice.getUserData(this.obj).subscribe({
        next: () => {
          this.formData.reset()
          this.toaster.success('Added');
        },
        error: (error) => {
          console.error('Error adding user:', error);
          this.toaster.error('Failed to add user');
        },
      });
    }
    else {
      // multiple values Add
      this.appservice.getUserData(this.obj).subscribe({
        next: () => {
          this.toaster.success('Added');
        },
        error: (error) => {
          console.error('Error adding user:', error);
          this.toaster.error('Failed to add user');
        },
      });
    }
  };
}
