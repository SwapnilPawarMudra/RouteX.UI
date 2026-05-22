import { Component } from '@angular/core';

import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-vendors-list',
  standalone: true,
  imports: [
    TableModule,
    CardModule,
    ToolbarModule,
    ButtonModule,
    InputTextModule,
    TagModule
  ],
  templateUrl: './vendors-list.component.html',
  styleUrl: './vendors-list.component.scss'
})
export class VendorsListComponent {

  vendors = [
    {
      company: 'ABC Logistics',
      city: 'Pune',
      fleet: 25,
      status: 'Active'
    },
    {
      company: 'Fast Transport',
      city: 'Mumbai',
      fleet: 40,
      status: 'Active'
    }
  ];
}
