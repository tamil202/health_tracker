import { CommonModule } from '@angular/common';
import { AppService } from '../../services/app.service';
import { Component, ViewEncapsulation } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
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
  constructor(private appservice: AppService) {}

  data: USERDATAFORMTYPE[] = [];
  // form
  formData: FormGroup = new FormGroup({});
  // make form dyname
  ngOnInit(): void {
    if (this.appservice.userData && this.appservice.userData.length) {
      this.data = this.appservice.userData; // copying data
      this.appservice.userData.forEach((item: any) => {
        this.formData.addControl(
          item.name,
          new FormControl('', [Validators.required])
        );
      });
    }
  }

  isSubmit = (): void => {
    console.log(this.formData.value);
  };
}
