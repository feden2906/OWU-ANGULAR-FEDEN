import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {AlbumsService} from "../../../services";
import {IAlbum} from "../../../models";

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent {
  album: IAlbum;

  constructor(private activatedRoute: ActivatedRoute, private albumsService: AlbumsService) {
    this.activatedRoute.params.subscribe(({id}) =>
      this.albumsService.getAlbumById(id).subscribe(value => this.album = value));
  }

}
