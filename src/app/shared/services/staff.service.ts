import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Staff } from '../models/staff';
import { STAFF } from '../models/mock-staff';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor() { }

  getStaff(): Observable<Staff[]> {
    return of(STAFF);
  }
  
  getProfile(id: number): Observable<Staff> {
    return of (STAFF.find(staff => staff.id === id));
  }
}
