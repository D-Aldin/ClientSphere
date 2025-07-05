import { Component, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatIconModule, MatTooltipModule, MatDialogModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  readonly dialog = inject(MatDialog);

  openDialog(): void {
    this.dialog.open(DialogAddUserComponent, {
      height: '800px',
      width: '600px',
    });
  }
}
