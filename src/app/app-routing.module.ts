import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GreenComponent } from './green/green.component';
import { PokemonComponent } from './pokemon/pokemon.component';

const routes: Routes = [
  {
    path: 'pokemon',
    component: PokemonComponent,
  },
  {
    path: 'green',
    component: GreenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
