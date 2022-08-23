import { Component, OnInit } from '@angular/core';
import { ExampleService } from 'src/services/example.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  dataResult: any;
  urlPokemons: any;
  constructor(private _service: ExampleService) {
    this.urlPokemons = [];


  }

  ngOnInit(): void {
    this.getData();
  }


  getData() {
    try {
      this._service.getData('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0').subscribe(response => {
        this.dataResult = response;
        this.getDetail();
      },
        (error) => {  })


    } catch (error) {
    }
  }

  getDetail() {
    for (let index of this.dataResult.results) {
      this._service.getData(index.url).subscribe(response => {
        this.urlPokemons.push({
          nombre: response.name
          , imagen: response.sprites.other.dream_world.front_default

        });

      },
        (error) => {})


    }


  }




}
