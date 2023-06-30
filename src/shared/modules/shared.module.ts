import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/shared/modules/material.module';
import { DefaultDialogComponent } from '../components/default-dialog/default-dialog.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DefaultDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  providers: []
})
export class SharedModule { }
