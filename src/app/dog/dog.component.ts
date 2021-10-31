import { Component, OnInit } from '@angular/core';
import { DogRepository } from '../repositories/dog-repository';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.sass']
})
export class DogComponent implements OnInit {
  imageUrl: string | null = null;
  constructor(private repository: DogRepository) { }

  ngOnInit(): void {
    this.repository.getDogImage().subscribe((result) => {
      console.info(result);
      this.imageUrl = JSON.parse(result).message;
    });
  }
}
