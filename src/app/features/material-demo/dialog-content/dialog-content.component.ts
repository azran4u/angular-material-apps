import { Component, Optional } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.scss'],
})
export class DialogContentComponent {
  constructor(
    @Optional() public dialogRef: MatDialogRef<DialogContentComponent>,
  ) {}
}
