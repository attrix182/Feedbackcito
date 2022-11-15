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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuccesfullyCreateComponent } from './pages/components/succesfully-create/succesfully-create.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateFormComponent,
    SuccesfullyCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    PrimengModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
