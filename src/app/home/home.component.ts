import { Component, OnInit } from '@angular/core';
import {UserService} from '../core/services';
import {User} from '../core/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  user: User;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.user = this.userService.getCurrentUser();
  }

}
