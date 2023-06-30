import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/shared/modules/material.module';
import { RouterModule } from '@angular/router';
import { EntranceMessageComponent } from '../entrance-message.component';
import { EntraceMessageRoutingModule } from './entrace-message-routing.module';

@NgModule({
  declarations: [
    EntranceMessageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    EntraceMessageRoutingModule
  ],
  exports:[
      EntranceMessageComponent
  ]
})
export class EntraceMessageModule { }
