import { Component, inject, TemplateRef, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-chart-content',
  templateUrl: './chart-content.html',
  styleUrl: './chart-content.scss',
  standalone: false,
})
export class ChartContent {

  readonly dialog = inject(MatDialog);
  @ViewChild('dialogContent', { static: false }) templateRef!: TemplateRef<any>;

  openDialog() {
    const dialogRef = this.dialog.open(this.templateRef, {
      width: '70vw',
      height: '80vh',
      backdropClass: 'chart-dialog-backdrop',
      hasBackdrop: true,
      disableClose: true,
      position: {
        top: '10vh',
        left: '15vw'
      },
      panelClass: 'centered-dialog'
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
