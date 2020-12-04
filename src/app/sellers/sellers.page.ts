import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController, Animation, IonRouterOutlet, ModalController } from '@ionic/angular';

import { SeeInfoModalComponent } from '../shared/modals/see-info-modal/see-info-modal.component';

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.page.html',
  styleUrls: ['./sellers.page.scss'],
})
export class SellersPage implements OnInit, AfterViewInit {
  @ViewChild('sellersTitle') sellersTitle: ElementRef;

  sellersTitleAnim: Animation;

  payoffList: any[]= [{
    title: 'Mortgage/Lien Payoff Process',
    subTitle: '',
    image: '../../../../assets/AtlantaMidtownPT3.jpg',
    more: [{
      info: "Provide our office with the loan number and customer service telephone number of any mortgage (including equity line mortgage) secured by the property."
    },
    {
      info: "Provide contact information for any other liens or judgments that affect the property."
    },
    {
      info: "If property is a condominium, provide a contact for the condominium association or management company."
    },
    {
      info: "If property is subject to a mandatory homeowners' association, please provide a contact for the homeowners association or management company."
    }]
  }]

  closingList: any[]= [{
    title: 'Parties to Closing',
    subTitle: '',
    image: '../../../../assets/AtlantaMidtownPT3.jpg',
    more: [{
      info: "If seller is a not a resident of the State of Georgia, contact our office for seller gain tax information to ensure that you have time to consult an accountant."
    },
    {
      info: "If seller is a corporation, estate, partnership, etc., please provide our office with the name and title of individual attending closing to sign."
    },
    {
      info: "If seller is a corporation, the corporation must be in good standing with Georgia Secretary of State."
    },
    {
      info: "If seller is a corporation, please bring corporate seal to closing."
    },
    {
      info: "If corporate seller is closing at The Fryer Law Firm for the first time, please provide corporate resolution and/or operating agreement."
    },
    {
      info: "If seller is an estate, please provide our office with information regarding the probate of any Will or administration proceeding. Contact us immediately if no action has been taken. Additional legal work may be required to transfer the property."
    },
    {
      info: "If seller is a trust or trustee, please provide our office with a copy of the Trust Agreement."
    }]
  }]

  powersOfAttorneyList: any[]= [{
    title: 'Powers of Attorney',
    subTitle: '',
    image: '../../../../assets/AtlantaMidtownPT3.jpg',
    more: [{
      info: "If a seller is unavailable to attend closing, our office must review and approve in advance any Power of Attorney prepared and executed elsewhere."
    },
    {
      info: "The person acting as the Power of Attorney will need to provide social security numbers, contact telephone numbers, emails and forwarding address of the sellers."
    },
    {
      info: "Please contact our office if you would like The Fryer Law Firm to prepare a Power of Attorney for the sellers."
    }]
  }]

  miscellaneousList: any[]= [{
    title: 'Miscellaneous Information',
    subTitle: '',
    image: '../../../../assets/AtlantaMidtownPT3.jpg',
    more: [{
      info: "All sellers must present some form of photo identification at closing."
    },
    {
      info: "Federal identification numbers / social security numbers are required of all sellers."
    },
    {
      info: "If sellers are required to come to closing with funds, contact our office for wiring instructions."
    }]
  }]

  constructor(
    private router: Router,
    private modalCtrl: ModalController,
    private routerOutlet: IonRouterOutlet,
    private animationCtrl: AnimationController
    ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.sellersTitleAnim = this.animationCtrl.create('mysellersTitleAnim');
    this.sellersTitleAnim 
      .addElement(this.sellersTitle.nativeElement)
      .duration(2000)
      .fromTo('transform', 'scale(0)', 'scale(1)')
      .fromTo('opacity', '0', '1');

    this.sellersTitleAnim.play();
  }

  async presentSeeInfoModal(info) {
    const modal = await this.modalCtrl.create({
      component: SeeInfoModalComponent,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
      componentProps: {
        info: info
      }
    });
    return await modal.present();
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
