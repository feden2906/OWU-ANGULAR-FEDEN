import {Component, OnInit} from '@angular/core';

import {IUser} from "../../../models";
import {UsersService} from "../../../services";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: IUser[]

  constructor(private userServices: UsersService) { }

  ngOnInit(): void {
    this.userServices.getAllUsers().subscribe(value => this.users = value)
  }

}
