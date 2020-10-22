import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent {
  loading: boolean;
  artista: any = {};
  tracks: any[]=[];
  constructor(private router:ActivatedRoute, private spotify: SpotifyService) { 
    this.router.params.subscribe(params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    })
    this.loading=true;
  }

  getArtista(id: string){
    this.spotify.getArtista(id)
      .subscribe(artista =>{
        console.log(artista);
        this.artista= artista;
        this.loading=false;
      })
  }
  getTopTracks(id:string){
    this.spotify.getTopTracks(id)
    .subscribe(tracks=>{
      console.log(tracks);
      this.tracks=tracks;
    })
  }

}
