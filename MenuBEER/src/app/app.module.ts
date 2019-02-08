import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';

import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashMessagesService } from 'angular2-flash-messages';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';
import { BeerPosterPageComponent } from './Components/beer-poster-page/beer-poster-page.component';
import { BeerCardComponent } from './Components/beer-poster-page/beer-card/beer-card.component';
import { BeerCardDownComponent } from './Components/beer-poster-page/beer-card-down/beer-card-down.component';

const routes: Route[] = [];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    NavBarComponent,
    NotFoundPageComponent,
    BeerPosterPageComponent,
    BeerCardComponent,
    BeerCardDownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FlashMessagesModule
  ],
  providers: [
    FlashMessagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
