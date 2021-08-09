import {PostDetailsComponent, PostsComponent} from "../components";
import {PostsGuardService} from "../services";

export const PostsRoute = {
  path: 'posts',
  component: PostsComponent,
  children: [
    { path: ':id', component: PostDetailsComponent, canActivate: [PostsGuardService] }
  ],
  canDeactivate: [PostsGuardService]
};
