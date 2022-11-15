import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PrimengModule } from './shared/primeng/primeng.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CreateFormComponent } from './pages/components/create-form/create-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    PrimengModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
