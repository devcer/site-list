import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor() {}
  showAlert(title = '', text = '', icon: 'success' | 'error'): Promise<any> {
    return Swal.fire({
      title,
      text,
      icon,
    });
  }
}
