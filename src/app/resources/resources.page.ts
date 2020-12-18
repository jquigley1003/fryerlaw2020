import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.page.html',
  styleUrls: ['./resources.page.scss'],
})
export class ResourcesPage implements OnInit, AfterViewInit {
  @ViewChild('resourcesTitle') resourcesTitle: ElementRef;

  resourcesTitleAnim: Animation

  constructor(
    private animationCtrl: AnimationController
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.resourcesTitleAnim = this.animationCtrl.create('myresourcesTitleAnim');
    this.resourcesTitleAnim 
      .addElement(this.resourcesTitle.nativeElement)
      .duration(2000)
      .fromTo('transform', 'scale(0)', 'scale(1)')
      .fromTo('opacity', '0', '1');

    this.resourcesTitleAnim.play();
  }

}
