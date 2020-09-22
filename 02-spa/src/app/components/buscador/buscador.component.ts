import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
  ]
})
export class BuscadorComponent implements OnInit  {
  heroes:any[]=[];
  termino:string;
  constructor(private activatedRoute :ActivatedRoute,private _heroesService:HeroesService,private router:Router) { 

  }

  ngOnInit(){
    this.activatedRoute.params.subscribe(params=>{
      this.termino=params['termino'];
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
  })
  }
  verheroe(){
    let id= 0;
    this.activatedRoute.params.subscribe(params=>{
      this.termino=params['termino'];
      id = this._heroesService.buscarIdHeroe(params['termino']);
    })
    this.router.navigate(['/heroe',id]);
    console.log(id);
  }


}
