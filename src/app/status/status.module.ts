import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';

import { StatusRoutingModule } from './status-routing.module';
import { StatusComponent } from './status/status.component';


@NgModule({
  declarations: [
    StatusComponent
  ],
  imports: [
    CommonModule,
    StatusRoutingModule,
    TableModule
  ]
})
export class StatusModule { }
