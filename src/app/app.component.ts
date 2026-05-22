import { Component } from '@angular/core';

import {
  RouterOutlet,
  RouterLink,
  RouterLinkActive
} from '@angular/router';

import { AvatarModule } from 'primeng/avatar';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { NgIf } from '@angular/common';

import {
  MessageService,
  ConfirmationService
} from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    NgIf,
    AvatarModule,
    ToastModule,
    ConfirmDialogModule
  ],
  providers: [
    MessageService,
    ConfirmationService
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  sidebarCollapsed = false;

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }

  showSuccessToast() {

    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Driver saved successfully'
    });

  }

  deleteDriver() {

    this.confirmationService.confirm({
      message: 'Delete this driver?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',

      accept: () => {

        this.messageService.add({
          severity: 'success',
          summary: 'Deleted',
          detail: 'Driver deleted successfully'
        });

        console.log('Deleted');

      },

      reject: () => {

        this.messageService.add({
          severity: 'info',
          summary: 'Cancelled',
          detail: 'Delete cancelled'
        });

      }
    });

  }

}