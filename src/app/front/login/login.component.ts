import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  constructor() { }

  username: string;
  password: string;

  ngOnInit() {
  }
  loginUser(e) {
    console.log(this.username, this.password);
  }
}
