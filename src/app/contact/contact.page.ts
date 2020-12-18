import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit, AfterViewInit {
  @ViewChild('contactTitle') contactTitle: ElementRef;

  contactTitleAnim: Animation

  constructor(
    private animationCtrl: AnimationController
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.contactTitleAnim = this.animationCtrl.create('mycontactTitleAnim');
    this.contactTitleAnim 
      .addElement(this.contactTitle.nativeElement)
      .duration(2000)
      .fromTo('transform', 'scale(0)', 'scale(1)')
      .fromTo('opacity', '0', '1');

    this.contactTitleAnim.play();
  }

}
