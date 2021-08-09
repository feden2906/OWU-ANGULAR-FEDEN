import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IUser} from "../../../models";
import {UsersService} from "../../../services";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  user: IUser

  constructor(private userServices: UsersService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(({id}) =>
      this.userServices.getUserById(id).subscribe(value => this.user = value))
  }

}
