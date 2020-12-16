import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit, AfterViewInit {
  @ViewChild('aboutTitle') aboutTitle: ElementRef;

  aboutTitleAnim: Animation

  constructor(
    private animationCtrl: AnimationController
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.aboutTitleAnim = this.animationCtrl.create('myaboutTitleAnim');
    this.aboutTitleAnim 
      .addElement(this.aboutTitle.nativeElement)
      .duration(2000)
      .fromTo('transform', 'scale(0)', 'scale(1)')
      .fromTo('opacity', '0', '1');

    this.aboutTitleAnim.play();
  }

}
