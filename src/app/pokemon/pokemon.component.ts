import { Component, OnInit } from '@angular/core';
import { PokemonRepository } from '../repositories/pokemon-repository';

// 現在の末尾のIDがこれらしい
const MaxPoekomenId = 898;

interface Pokemon {
  id: number;
  name: string;
  imageUrl: string;
}

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.sass']
})
export class PokemonComponent implements OnInit {
  pokemon: Pokemon | null = null;
  constructor(private repository: PokemonRepository) { }

  ngOnInit(): void {
    const id = Math.floor(Math.random() * MaxPoekomenId);
    this.repository.getPokemonData(id).subscribe((result) => {
      this.pokemon = {
        id: result.id,
        name: result.species.name,
        imageUrl: result.sprites.front_default,
      }
    });
  }
}
