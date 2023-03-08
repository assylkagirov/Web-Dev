import { Component } from '@angular/core';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailsComponent {
  album : Album;
  loaded: boolean;
  newTitle: string;
  constructor(private route : ActivatedRoute,private albumService :AlbumsService){
    this.album = {} as Album;
    this.loaded = true;
    this.newTitle="";
  }

}
