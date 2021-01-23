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
  sitesData: any[] = [];
  showProgressBar = true;
  constructor(private siteService: SitesService, private router: Router, private alert: AlertService) {}

  ngOnInit(): void {
    this.siteService.getSitesList().subscribe(
      (data) => {
        this.sitesData = data as any[];
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
