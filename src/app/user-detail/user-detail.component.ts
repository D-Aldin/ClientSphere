import { Component, inject, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { Firestore, doc, docData } from '@angular/fire/firestore';
import { UserProfile } from '../shared/interfaces/UserProfile';
import { Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    AsyncPipe,
    MatIconModule,
    MatMenuModule,
  ],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailComponent implements OnInit {
  route = inject(ActivatedRoute);
  private firestore: Firestore = inject(Firestore);
  userId: string | null = null;
  user$: Observable<UserProfile> = of();

  constructor() {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.getUserData();
  }

  getUserData() {
    const userRef = doc(this.firestore, 'user/' + this.userId);
    this.user$ = docData(userRef, { idField: 'id' }) as Observable<UserProfile>;
  }

  openDropDown() {
    console.log('hello');
  }
}
