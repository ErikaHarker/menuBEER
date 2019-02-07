import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public email: string;
  public password: string;

  constructor(
    public router: Router,
    public flashMessage: FlashMessagesService,
  ) { }

  ngOnInit() {
  }

  onSubmitLogin(event){
    event.preventDefault();

    let user = {
      username: this.email,
      password: this.password,
    };
    this.router.navigate(['/BeerPoster']);
  }

}
