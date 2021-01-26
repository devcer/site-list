import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert/alert.service';
import { SitesService } from 'src/app/services/sites/sites.service';
import { ISiteDetails } from '../sites-list/sites-list.component';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss'],
})
export class SiteComponent implements OnInit {
  siteId = '';
  siteDetails: ISiteDetails = {
    id: '',
    imgSrc: '',
    siteName: '',
    email: '',
    phoneNumber: '',
    jobTitle: '',
    shortAddress: '',
    fullAddress: '',
    mainContact: '',
  };
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
        this.siteDetails = {
          id: data.id,
          imgSrc: data.images[0],
          siteName: data.title,
          email: data.contacts.main.email,
          phoneNumber: data.contacts.main.phoneNumber,
          jobTitle: data.contacts.main.jobTitle,
          shortAddress: `${data.address.state}, ${data.address.country}`,
          fullAddress: `${data.address.street}, ${data.address.city}, ${data.address.state}, ${data.address.country} - ${data.address.zipCode}`,
          mainContact: `${data.contacts.main.firstName} ${data.contacts.main.lastName}`,
        };
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
