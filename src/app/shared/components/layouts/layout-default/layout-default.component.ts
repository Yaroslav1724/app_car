import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'layout-default',
  templateUrl: 'layout-default.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutDefaultComponent {}
