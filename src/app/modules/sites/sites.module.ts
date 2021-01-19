import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SitesRoutingModule } from './sites-routing.module';
import { SitesListComponent } from 'src/app/pages/sites-list/sites-list.component';
import { SiteComponent } from 'src/app/pages/site/site.component';



@NgModule({
  declarations: [
    SitesListComponent,
    SiteComponent
  ],
  imports: [
    CommonModule,
    SitesRoutingModule
  ]
})
export class SitesModule { }
