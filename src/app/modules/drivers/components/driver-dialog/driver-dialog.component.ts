import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-driver-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    DialogModule,
    ButtonModule,
    InputTextModule
  ],
  templateUrl: './driver-dialog.component.html'
})
export class DriverDialogComponent {

  visible = false;

  driverForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.driverForm = this.fb.group({
      name: ['', Validators.required],
      mobile: ['', Validators.required],
      license: ['', Validators.required]
    });

  }

  save() {

    if (this.driverForm.valid) {
      console.log(this.driverForm.value);
    }

  }

}