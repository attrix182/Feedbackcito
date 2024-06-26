import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PrimengModule } from './shared/primeng/primeng.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CreateFormComponent } from './pages/home/components/create-form/create-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuccesfullyCreateComponent } from './pages/home/components/succesfully-create/succesfully-create.component';
import { ParticipateComponent } from './pages/home/components/participate/participate.component';
import { CommonModule } from '@angular/common';
import { ParticipantViewComponent } from './pages/participant-view/participant-view.component';
import { QrCodeModule } from 'ng-qrcode';
import { FeedbackViewComponent } from './pages/feedback-view/feedback-view.component';
import { LandingComponent } from './pages/landing/landing.component';
import { getAnalytics } from 'firebase/analytics';
import { provideAnalytics } from '@angular/fire/analytics';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateFormComponent,
    SuccesfullyCreateComponent,
    ParticipateComponent,
    ParticipantViewComponent,
    FeedbackViewComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule,
    BrowserAnimationsModule,
    QrCodeModule,
  ],
  providers: [
      provideFirebaseApp(() => initializeApp({ ...environment.firebaseConfig })),
      provideFirestore(() => getFirestore()),
      provideAnalytics(() => getAnalytics()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
