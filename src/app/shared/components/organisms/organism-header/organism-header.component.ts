import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LinkItem } from '../../../models';

@Component({
  selector: 'organism-header',
  templateUrl: 'organism-header.component.html',
  styleUrls: ['organism-header.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrganismHeaderComponent implements OnInit {
  headerItems: LinkItem[] = [
    {
      title: 'Home',
      icon: 'home',
    },
    {
      title: 'Dashboard',
      icon: 'dashboard',
    },
  ];

  ngOnInit() {}
}
