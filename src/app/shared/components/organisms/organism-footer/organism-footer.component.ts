import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LinkItem } from '../../../models';

@Component({
  selector: 'organism-footer',
  templateUrl: 'organism-footer.component.html',
  styleUrls: ['organism-footer.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrganismFooterComponent {
  date = new Date();

  get year(): number {
    return this.date.getFullYear();
  }

  listIcons: LinkItem[] = [
    {
      icon: 'logo-facebook',
    },
    {
      icon: 'logo-twitter',
    },
    {
      icon: 'logo-linkedin',
    },
    {
      icon: 'logo-instagram',
    },
  ];

  linkItems: LinkItem[] = [
    { title: 'Home' },
    { title: 'About' },
    { title: 'Services' },
    { title: 'Team' },
    { title: 'Contact' },
  ];
}
