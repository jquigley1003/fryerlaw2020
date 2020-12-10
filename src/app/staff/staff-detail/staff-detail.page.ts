import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StaffService } from '../../shared/services/staff.service';

@Component({
  selector: 'app-staff-detail',
  templateUrl: './staff-detail.page.html',
  styleUrls: ['./staff-detail.page.scss'],
})
export class StaffDetailPage implements OnInit {
  staffId = null;
  profile = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private staffService: StaffService
  ) { }

  ngOnInit() {
    const staffId = +this.activatedRoute.snapshot.paramMap.get('id');
    this.staffService.getProfile(staffId)
      .subscribe(data => this.profile = data)
  }

  goToStaff() {
    this.router.navigate(['/staff'])
  }

}
