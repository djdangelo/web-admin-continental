import { Routes } from '@angular/router';
import {NotFoundComponent} from "./shared/not-found/not-found.component";

export const routes: Routes = [
  { path: 'core', loadChildren: () => import('./modules/modules.module').then(m => m.ModulesModule),},
  { path: 'notfound', component: NotFoundComponent, },
  { path: '', redirectTo: 'core', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent, },
];
