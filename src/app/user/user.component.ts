import { Component, inject, OnInit, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { Firestore } from '@angular/fire/firestore';
import { collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user.class';
import { UserProfile } from '../shared/interfaces/UserProfile';

export interface UserProfileId {
  id: string;
  users$: Observable<UserProfile>;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatCardModule,
    AsyncPipe,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  readonly dialog = inject(MatDialog);
  private firestore: Firestore = inject(Firestore);
  users$: Observable<UserProfile[]>;

  constructor() {
    const userData = collection(this.firestore, 'user');
    this.users$ = collectionData(userData, { idField: 'id' }) as Observable<
      UserProfile[]
    >;
  }

  openDialog(): void {
    this.dialog.open(DialogAddUserComponent, {
      height: '800px',
      width: '480px',
    });
  }
}
