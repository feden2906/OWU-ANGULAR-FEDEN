import {Routes} from "@angular/router";
import {UsersRoute} from "./usersRoute";
import {TodosRoute} from "./todosRoute";
import {PostsRoute} from "./postsRoute";
import {AlbumsRoute} from "./albumsRoute";

export const routes: Routes = [
  UsersRoute,
  PostsRoute,
  AlbumsRoute,
  TodosRoute
];
