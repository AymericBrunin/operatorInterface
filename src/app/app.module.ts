import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { PaginationModule,TabsModule } from 'ng2-bootstrap';
import { NgClass } from '@angular/common';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { OrdersService } from './Order/orders.service';
import { DashboardComponent } from './Dashboard/dashboard.component';
import { OrdersShellComponent } from './OrdersShell/orders-shell.component';
import { AllOrdersComponent } from './OrdersTable/all-orders.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective } from 'ng2-expanding-table/ng2-expanding-table';
import { NgTableRowComponent } from 'ng2-expanding-table/components/table/ng-table-row.component';
import { NgbdModalComponent, NgbdModalContent } from './LoginModal/modal.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {ScannerComponent} from './Scanner/scanner.component';
import {QrScannerComponent} from '../../node_modules/angular2-qrscanner/dist/src/qrscanner.component';
import {OneOrderComponent} from './OrdersTable/one-order.component';
import { RowContentComponent} from './OrdersTable/row-content.component';
 

@NgModule({
  declarations: [
    AppComponent,
    RowContentComponent,
    NgbdModalComponent,
    NgbdModalContent,
    DashboardComponent,
    OrdersShellComponent,
    AllOrdersComponent,
    NgTableComponent,
    NgTableFilteringDirective,
    NgTablePagingDirective,
    NgTableSortingDirective,
    NgTableRowComponent,
    QrScannerComponent,
    ScannerComponent,
    OneOrderComponent
    
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    PaginationModule.forRoot(),
    TabsModule,
    Angular2FontawesomeModule,
  ],
  entryComponents: [NgbdModalContent,RowContentComponent],
  providers: [OrdersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
