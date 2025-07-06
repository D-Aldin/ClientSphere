import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideAnimations(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'clientsphere-c9500',
        appId: '1:909497080452:web:dc5d80d93d95a7bb2240d1',
        storageBucket: 'clientsphere-c9500.firebasestorage.app',
        apiKey: 'AIzaSyD8TnyIs3qowBP0a0aSoTUaOfKbREZlcwY',
        authDomain: 'clientsphere-c9500.firebaseapp.com',
        messagingSenderId: '909497080452',
      })
    ),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
  ],
};
