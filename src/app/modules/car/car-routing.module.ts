import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutDefaultComponent } from '../../shared';
import { CarDetailComponent, CarListComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: LayoutDefaultComponent,
    children: [
      {
        path: '',
        component: CarListComponent,
      },
      {
        path: 'car/:id',
        component: CarDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarRoutingModule {}
