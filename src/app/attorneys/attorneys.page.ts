import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController, Animation } from '@ionic/angular';

@Component({
  selector: 'app-attorneys',
  templateUrl: './attorneys.page.html',
  styleUrls: ['./attorneys.page.scss'],
})
export class AttorneysPage implements OnInit, AfterViewInit {
  @ViewChild ('attorneysTitle') attorneysTitle: ElementRef;

  attorneysTitleAnim: Animation;

  constructor(
    private animationCtrl: AnimationController,
    private router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.attorneysTitleAnim = this.animationCtrl.create('myAttorneysTitleAnim');
    this.attorneysTitleAnim 
      .addElement(this.attorneysTitle.nativeElement)
      .duration(2000)
      .fromTo('transform', 'scale(0)', 'scale(1)')
      .fromTo('opacity', '0', '1');

    this.attorneysTitleAnim.play();
  }

}
