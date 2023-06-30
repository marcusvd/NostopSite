import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-default-dialog',
  templateUrl: './default-dialog.component.html',
  styleUrls: ['./default-dialog.component.css']
})
export class DefaultDialogComponent {

  splittedBody: string[] = []
  textB: string[] = [];
    constructor(private _dialogRef: MatDialogRef<DefaultDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) {

  // if (data.body) {
  //  this.textB = data.body.split(':')
  //  this.splittedBody = data.body.split('.')
  // }

}


}
