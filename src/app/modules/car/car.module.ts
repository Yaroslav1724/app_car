import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CarRoutingModule } from './car-routing.module';
import { CarDetailComponent, CarListComponent } from './components';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CarListComponent, CarDetailComponent],
  imports: [
    CarRoutingModule,
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class CarModule {}
