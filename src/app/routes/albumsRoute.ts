import {AlbumDetailsComponent, AlbumsComponent} from "../components";
import {AlbumsGuardsService} from "../services";

export const AlbumsRoute = {
  path: 'albums', component: AlbumsComponent, canDeactivate : [
    { path: 'albums/:id', component: AlbumDetailsComponent, canActivate : [AlbumsGuardsService] }
  ]
};
