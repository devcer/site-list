import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SitesService {
  constructor(private http: HttpClient) {}
  getSitesList(): Observable<any> {
    const url = `${environment.serverUrl}/sites`;
    return this.http.get(url);
  }
  getSiteDetails(siteId: string): Observable<any> {
    const url = `${environment.serverUrl}/sites/${siteId}`;
    return this.http.get(url);
  }
}
