import { Component, inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { User } from '../../models/user.class';
import { Firestore } from '@angular/fire/firestore';
import { collection, addDoc } from 'firebase/firestore';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogClose } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatProgressBarModule,
    MatDialogClose,
    ReactiveFormsModule,
  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss',
})
export class DialogAddUserComponent {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  private firestore = inject(Firestore);
  user: User = new User({});
  birthDate: Date = new Date();
  loading: boolean = false;
  readonly dialogRef = inject(MatDialogRef<DialogAddUserComponent>);

  constructor() {}

  async saveUser() {
    this.user.birthday = this.birthDate.getTime();
    console.log('User saved:', this.user);
    this.loading = true;
    try {
      const docRef = await addDoc(
        collection(this.firestore, 'user'),
        this.user.toJSON()
      );
      console.log('User added with ID:', docRef.id);
    } catch (error) {
      console.error('Error adding user:', error);
    }
    this.loading = false;
    this.dialogRef.close();
  }
}
