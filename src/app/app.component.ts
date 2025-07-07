import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { AsyncPipe } from '@angular/common';
import { Firestore } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    RouterModule,
    MatTooltipModule,
    MatDialogModule,
    MatInputModule,
    AsyncPipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  firestore: Firestore = inject(Firestore);
  title = 'clientsphere';
}
