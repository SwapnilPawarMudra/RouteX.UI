import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [TableModule, NgFor],
  templateUrl: './data-table.component.html'
})
export class DataTableComponent {

  @Input() columns: any[] = [];

  @Input() data: any[] = [];

}