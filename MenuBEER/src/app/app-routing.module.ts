import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { BeerPosterPageComponent } from './Components/beer-poster-page/beer-poster-page.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'BeerPoster', component: BeerPosterPageComponent },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
