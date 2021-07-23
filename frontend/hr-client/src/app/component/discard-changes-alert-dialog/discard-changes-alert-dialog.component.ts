import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-discard-changes-alert-dialog',
  templateUrl: './discard-changes-alert-dialog.component.html',
  styleUrls: ['./discard-changes-alert-dialog.component.css']
})
export class DiscardChangesAlertDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DiscardChangesAlertDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
