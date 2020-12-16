import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-refinancing',
  templateUrl: './refinancing.page.html',
  styleUrls: ['./refinancing.page.scss'],
})
export class RefinancingPage implements OnInit, AfterViewInit {
  @ViewChild('refinancingTitle') refinancingTitle: ElementRef;

  refinancingTitleAnim: Animation

  constructor(
    private animationCtrl: AnimationController
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.refinancingTitleAnim = this.animationCtrl.create('myrefinancingTitleAnim');
    this.refinancingTitleAnim 
      .addElement(this.refinancingTitle.nativeElement)
      .duration(2000)
      .fromTo('transform', 'scale(0)', 'scale(1)')
      .fromTo('opacity', '0', '1');

    this.refinancingTitleAnim.play();
  }

}
