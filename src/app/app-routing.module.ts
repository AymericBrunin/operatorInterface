import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {OrdersShellComponent} from './OrdersShell/orders-shell.component';
import { AppComponent} from './app.component';
import { DashboardComponent} from './Dashboard/dashboard.component';
import {AllOrdersComponent} from './OrdersTable/all-orders.component';
import {ScannerComponent} from './Scanner/scanner.component';
import {OneOrderComponent} from './OrdersTable/one-order.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'showOrders',
    component: OrdersShellComponent,
    children: [
      {
        path: 'all',
        component: AllOrdersComponent
      },
      {
        path: 'scanner',
        component: ScannerComponent
      },
      {
        path: ':id',
        component: OneOrderComponent
      },
    ]
  }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}