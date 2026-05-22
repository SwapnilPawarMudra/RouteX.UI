import { Routes } from '@angular/router';

import { DashboardComponent } from './modules/dashboard/pages/dashboard/dashboard.component';
import { DriversListComponent } from './modules/drivers/pages/drivers-list/drivers-list.component';
import { VendorsListComponent } from './modules/vendors/pages/vendors-list/vendors-list.component';
import { VehiclesListComponent } from './modules/fleet-master/pages/vehicles-list/vehicles-list.component';
import { LoginComponent } from './modules/auth/pages/login/login.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        canActivate: [authGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'drivers',
        component: DriversListComponent,
        canActivate: [authGuard]
    },
    {
        path: 'vendors',
        component: VendorsListComponent
    },
    {
        path: 'fleet-master',
        component: VehiclesListComponent
    }

];