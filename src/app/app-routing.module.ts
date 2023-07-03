import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummyComponent } from './dummy/dummy.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:
      '/car-list' /*redirected to the product-type-selection page that it is the main page.*/,
    pathMatch: 'full',
  },
  {
    path: 'car-list',
    component: DummyComponent,
    data: { publicRoute: true },
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/car/car.module').then((m) => m.CarModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
