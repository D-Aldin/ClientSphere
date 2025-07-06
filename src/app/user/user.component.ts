import { Component, inject, OnInit, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MatDialogModule } from '@angular/material/dialog';
import { User } from '../../models/user.class';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatIconModule, MatTooltipModule, MatDialogModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  // user = new User();

  readonly dialog = inject(MatDialog);

  openDialog(): void {
    this.dialog.open(DialogAddUserComponent, {
      height: '800px',
      width: '480px',
    });
  }
}
