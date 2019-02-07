import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';
import { BeerPosterPageComponent } from './Components/beer-poster-page/beer-poster-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    NavBarComponent,
    NotFoundPageComponent,
    BeerPosterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
