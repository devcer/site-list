import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiteComponent } from 'src/app/pages/site/site.component';
import { SitesListComponent } from 'src/app/pages/sites-list/sites-list.component';

const routes: Routes = [
  {
    path: '',
    component: SitesListComponent,
  },
  {
    path: ':id',
    component: SiteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SitesRoutingModule {}
