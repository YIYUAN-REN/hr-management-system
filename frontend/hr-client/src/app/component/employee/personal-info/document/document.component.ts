import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // discardChanges  = function()  {
  //   let dialogRef = this.dialog.open(AlertDiscardChangesComponent);
  //   dialogRef.afterClosed().subscribe(result => {
  //     // NOTE: The result can also be nothing if the user presses the `esc` key or clicks outside the dialog
  //     if (result == 'yes') {
  //       this.disableEditor();
  //     } 
  //   })
  // }
}
