import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
    standalone: false,
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Dashboard', icon: 'pi pi-home',
                items: [
                    { label: 'Inicio', icon: 'pi pi-desktop', routerLink: ['/'] },
                ]
            },
          {
            label: 'Cotizaciones', icon: 'fa-solid fa-ticket',
            items: [
              { label: 'Lista de Cotizaciones', icon: 'pi pi-bars', routerLink: ['coupons/list-coupon'] },
              { label: 'Crear nueva cotizacion', icon: 'pi pi-plus', routerLink: ['coupons/generate-coupon'] },
            ]
          },
          {
            label: 'Clientes', icon: 'pi pi-database',
            items: [
              { label: 'Lista de clientes', icon: 'pi pi-bars', routerLink: ['customers/list-customer'] },
              { label: 'Nuevo cliente', icon: 'pi pi-plus', routerLink: ['customers/create-customer'] },
            ]
          },
          // {
          //   label: 'Mantenimiento', icon: 'pi pi-cog',
          //   items: [
          //     { label: 'Lista de empresas', icon: 'fa-regular fa-building', routerLink: ['maintenance/list-company'] },
          //     { label: 'Lista de Roles', icon: 'pi pi-sliders-h', routerLink: ['maintenance/list-role'] },
          //     { label: 'Lista de Clases - Google', icon: 'pi pi-sliders-h', routerLink: ['maintenance/list-object-google'] },
          //   ]
          // },
        ];
    }
}
