import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackViewComponent } from './pages/feedback-view/feedback-view.component';
import { HomeComponent } from './pages/home/home.component';
import { ParticipantViewComponent } from './pages/participant-view/participant-view.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: ':id',  component: HomeComponent},
  {path:'sesion/:id', component: ParticipantViewComponent},
  {path:'results/:id', component: FeedbackViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
