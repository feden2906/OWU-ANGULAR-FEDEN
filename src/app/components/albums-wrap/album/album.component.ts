import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IAlbum} from "../../../models";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {
  @Input()
  album: IAlbum;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  navigateToAlbumDetails() {
    this.router.navigate([this.album.id], {relativeTo : this.activatedRoute});
  }

}
