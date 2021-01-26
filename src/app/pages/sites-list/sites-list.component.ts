import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISite } from 'src/app/models/site';
import { User } from 'src/app/models/user';
import { AlertService } from 'src/app/services/alert/alert.service';
import { SitesService } from 'src/app/services/sites/sites.service';

@Component({
  selector: 'app-sites-list',
  templateUrl: './sites-list.component.html',
  styleUrls: ['./sites-list.component.scss'],
})
export class SitesListComponent implements OnInit {
  sitesData: ISite[] = [];
  showProgressBar = true;
  constructor(
    private siteService: SitesService,
    private router: Router,
    private alert: AlertService
  ) {}

  ngOnInit(): void {
    this.siteService.getSitesList().subscribe(
      (data) => {
        this.sitesData = data.map((site: any) => {
          return {
            id: site.id,
            imgSrc: site.images[0],
            siteName: site.title,
            mainContact: new User().deserialize(site.contacts.main),
          };
        });
        console.log(this.sitesData);
        this.showProgressBar = false;
      },
      (error) => {
        this.showProgressBar = false;
        this.alert.showAlert('Error', 'Error in receiving response', 'error');
      }
    );
  }
  goToSite(siteId: string): void {
    this.router.navigateByUrl(`sites/${siteId}`);
  }
}
