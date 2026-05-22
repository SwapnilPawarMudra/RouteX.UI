import { Component } from '@angular/core';

import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import { DriverDialogComponent } from '../../components/driver-dialog/driver-dialog.component';

@Component({
  selector: 'app-drivers-list',
  standalone: true,
  imports: [
    TableModule,
    CardModule,
    ToolbarModule,
    ButtonModule,
    InputTextModule,
    TagModule,
    DriverDialogComponent
  ],
  templateUrl: './drivers-list.component.html'
})
export class DriversListComponent {

  drivers = [
    {
      name: 'Rahul Patil',
      mobile: '9876543210',
      license: 'MH12-12345',
      status: 'Active'
    },
    {
      name: 'Amit Sharma',
      mobile: '9988776655',
      license: 'MH14-45678',
      status: 'Active'
    }
  ];

}