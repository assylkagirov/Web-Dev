import { Component } from '@angular/core';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {
  albums : Album[];
  newAlbum : Album;
  loaded: boolean;
  constructor(private albumService: AlbumsService){
    this.albums =[];
    this.loaded = true;
    this.newAlbum = {} as Album;
  }
  ngOnInit(): void{
    this.getAlbums();
  }
  getAlbums(){
    this.loaded = false;
    this.albumService.getAlbums().subscribe((response)=>{
      this.albums = response.slice(0,100);
      this.loaded = true;
    });
  }
  deleteAlbum(album:Album): void{
    const ind = this.albums.indexOf(album);
    if(ind!==-1){
      this.albums.splice(ind,1);
    }
  }
}
