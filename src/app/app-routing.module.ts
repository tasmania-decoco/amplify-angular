import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlueComponent } from './blue/blue.component';
import { GreenComponent } from './green/green.component';

const routes: Routes = [
  {
    path: 'blue',
    component: BlueComponent,
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
