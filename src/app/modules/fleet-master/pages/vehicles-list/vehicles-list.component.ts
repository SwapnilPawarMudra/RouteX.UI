import { Component } from '@angular/core';

import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-vehicles-list',
  standalone: true,
  imports: [
    TableModule,
    CardModule,
    ToolbarModule,
    ButtonModule,
    InputTextModule,
    TagModule
  ],
  templateUrl: './vehicles-list.component.html',
  styleUrl: './vehicles-list.component.scss'
})
export class VehiclesListComponent {

  vehicles = [
    {
      number: 'MH12AB1234',
      type: 'Truck',
      insurance: 'Valid',
      status: 'Available'
    },
    {
      number: 'MH14XY5678',
      type: 'Tempo',
      insurance: 'Valid',
      status: 'On Trip'
    }
  ];
}
