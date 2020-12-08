import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController, Animation } from '@ionic/angular';
import { Observable } from 'rxjs';

import { Staff } from '../shared/models/staff';
import { StaffService } from '../shared/services/staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.page.html',
  styleUrls: ['./staff.page.scss'],
})
export class StaffPage implements OnInit, AfterViewInit {
  @ViewChild ('staffTitle') staffTitle: ElementRef;

  staffProfiles$: Observable<Staff[]>;

  staffTitleAnim: Animation;

  constructor(
    private animationCtrl: AnimationController,
    private router: Router,
    private staffService: StaffService) { }

  ngOnInit() {
    this.loadStaff();
  }

  ngAfterViewInit() {
    this.staffTitleAnim = this.animationCtrl.create('mystaffTitleAnim');
    this.staffTitleAnim 
      .addElement(this.staffTitle.nativeElement)
      .duration(2000)
      .fromTo('transform', 'scale(0)', 'scale(1)')
      .fromTo('opacity', '0', '1');

    this.staffTitleAnim.play();
  }

  loadStaff() {
    this.staffProfiles$ = this.staffService.getStaff();
  }

}
