import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
            shortAddress: `${site.address.state}, ${site.address.country}`,
            mainContact: `${site.contacts.main.firstName} ${site.contacts.main.lastName}`,
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

export interface ISite {
  id: string;
  imgSrc: string;
  siteName: string;
  shortAddress: string;
  fullAddress: string;
  mainContact: string;
}
export interface ISiteDetails {
  id: string;
  imgSrc: string;
  siteName: string;
  email: string;
  phoneNumber: string;
  jobTitle: string;
  shortAddress: string;
  fullAddress: string;
  mainContact: string;
}