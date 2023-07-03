import * as _components from './components';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DummyComponent } from '../dummy/dummy.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

export const ORGANISMS = [
  _components.OrganismHeaderComponent,
  _components.OrganismFooterComponent,
  _components.LayoutDefaultComponent,
];
export const COMPONENTS = [...ORGANISMS];
export const MODULES = [
  CommonModule,
  RouterModule,
  MatCardModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  FlexLayoutModule,
  IonicModule,
  MatPaginatorModule,
];
