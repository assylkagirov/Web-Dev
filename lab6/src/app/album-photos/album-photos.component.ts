import { Component } from '@angular/core';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent {
  album : Album;
  photos : photos[];
  constructor(private route :ActivatedRoute, private albumService :AlbumsService){
    this.album = {} as Album;
    this.photos = [{}] as photos[];
  }

  back() {
    window.location.href = `http://localhost:4200/albums/${this.album.id}`;
  }
}
