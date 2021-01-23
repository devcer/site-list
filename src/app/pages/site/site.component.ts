import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert/alert.service';
import { SitesService } from 'src/app/services/sites/sites.service';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss'],
})
export class SiteComponent implements OnInit {
  siteId = '';
  siteDetails: any;
  showDetailSection = false;
  showProgressBar = true;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private siteService: SitesService,
    private alert: AlertService
  ) {}

  ngOnInit(): void {
    const siteId = this.route.snapshot.paramMap.get('id') || '';
    this.siteService.getSiteDetails(siteId).subscribe(
      (data) => {
        console.log(data);
        this.siteDetails = data;
        this.showDetailSection = true;
      },
      (error) => {
        this.showProgressBar = false;
        this.alert.showAlert('Error', 'Error in receiving response', 'error');
      }
    );
  }
  goBack() {
    this.router.navigateByUrl(`sites`);
  }
}
