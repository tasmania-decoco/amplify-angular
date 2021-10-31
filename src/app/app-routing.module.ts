import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogComponent } from './dog/dog.component';
import { PokemonComponent } from './pokemon/pokemon.component';

const routes: Routes = [
  {
    path: 'pokemon',
    component: PokemonComponent,
  },
  {
    path: 'dog',
    component: DogComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
