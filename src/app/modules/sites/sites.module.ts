import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SitesRoutingModule } from './sites-routing.module';
import { SitesListComponent } from 'src/app/pages/sites-list/sites-list.component';
import { SiteComponent } from 'src/app/pages/site/site.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ScrollingModule } from '@angular/cdk/scrolling';
@NgModule({
  declarations: [SitesListComponent, SiteComponent],
  imports: [
    CommonModule,
    SitesRoutingModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressBarModule,
    ScrollingModule,
  ],
})
export class SitesModule {}
