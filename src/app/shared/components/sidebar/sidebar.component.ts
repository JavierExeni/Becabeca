import { Component, inject } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  sideBarService = inject(SidebarService);

  options = [
    {
      option: 'Dashboard',
      icon: 'fa-solid fa-chart-simple',
      hasBadge: false,
      divider: false,
      route: 'dashboard',
    },
    {
      option: 'Mis webinars',
      icon: 'fa-brands fa-youtube',
      hasBadge: false,
      divider: false,
      route: 'webinars',
    },
    {
      option: 'Mis cursos',
      icon: 'fa-solid fa-book',
      hasBadge: true,
      divider: false,
      badgeText: 'New',
      route: 'cursos',
    },
    {
      option: 'Mis Becas',
      icon: 'fa-solid fa-graduation-cap',
      hasBadge: false,
      divider: false,
      route: 'becas',
    },
    {
      divider: true,
    },
    {
      option: 'Upgrade to Pro',
      icon: 'fa-solid fa-gem',
      hasBadge: false,
      divider: false,
      route: '',
    },
    {
      option: 'Documentación',
      icon: 'fa-solid fa-file-lines',
      hasBadge: false,
      divider: false,
      route: '',
    },
  ];

  bottomOptions = [
    {
      option: 'Salir',
      icon: 'fa-solid fa-arrow-right-from-bracket',
      hasBadge: false,
      route: '',
    },
  ];
}
