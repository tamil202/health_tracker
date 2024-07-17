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
import { USERDATAFORMTYPE } from '../../interface/app.interface';

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
  // form
  formData: FormGroup = new FormGroup({});
  // make form dyname
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

  isSubmit = (): void => {
    this.appservice.getUserData(this.formData.value).subscribe({
      next: () => {
        this.formData.reset();
        this.toaster.success('Added');
      },
      error: (error) => {
         console.error('Error adding user:', error);
         this.toaster.error('Failed to add user');
      }
    });
  };
}
