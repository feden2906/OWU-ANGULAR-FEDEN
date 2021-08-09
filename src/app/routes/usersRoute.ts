import {UserDetailsComponent, UsersComponent} from "../components";
import {UserGuardsService} from "../services";

export const UsersRoute = {
  path: 'users',
  component: UsersComponent,
  children: [
    { path: ':id', component: UserDetailsComponent, canActivate: [UserGuardsService] }
  ],
  canDeactivate: [UserGuardsService]
};
