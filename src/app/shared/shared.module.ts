import { ModuleWithProviders, NgModule } from '@angular/core';
import { COMPONENTS, MODULES } from './imports';
import { DummyComponent } from '../dummy/dummy.component';

@NgModule({
  imports: [...MODULES],
  exports: [...COMPONENTS, ...MODULES],
  declarations: [...COMPONENTS, DummyComponent],
  providers: [],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
    };
  }
}
