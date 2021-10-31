import { Component, OnInit } from '@angular/core';
import { PokemonRepository } from '../repositories/pokemon-repository';

interface Pokemon {
  id: number;
  name: string;
  imageUrl: string;
}


@Component({
  selector: 'app-blue',
  templateUrl: './blue.component.html',
  styleUrls: ['./blue.component.sass']
})

export class BlueComponent implements OnInit {
  pokemon: Pokemon | null = null;
  constructor(private repository: PokemonRepository) { }

  ngOnInit(): void {
    const id = Math.floor(Math.random() * 600);
    this.repository.getPokemonData(id).subscribe((result) => {
      this.pokemon = {
        id: result.id,
        name: result.species.name,
        imageUrl: result.sprites.front_default,
      }
    });
  }
}
