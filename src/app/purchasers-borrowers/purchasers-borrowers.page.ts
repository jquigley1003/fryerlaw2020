import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController, Animation, IonRouterOutlet, ModalController } from '@ionic/angular';

import { SeeInfoModalComponent } from '../shared/modals/see-info-modal/see-info-modal.component';

@Component({
  selector: 'app-purchasers-borrowers',
  templateUrl: './purchasers-borrowers.page.html',
  styleUrls: ['./purchasers-borrowers.page.scss'],
})
export class PurchasersBorrowersPage implements OnInit, AfterViewInit {
  @ViewChild('purchasersTitle') purchasersTitle: ElementRef;

  purchasersTitleAnim: Animation;

  fundsList: any[]= [{
    title: 'Funds for Closing',
    subTitle: '',
    image: '../../../../assets/AtlantaMidtown3.jpg',
    more: [{
      info: "Funds above $5000.00 should be wired in advance of closing. Please telephone our office for wiring instructions."
    },
    {
      info: "Amounts above $1000, but below $5000, may be in the form of a bank cashier's check. Checks may be made payable either to the purchaser(s) or The Fryer Law Firm."
    },
    {
      info: "Please feel free to contact our office for the amount of funds necessary for closing. If figures are not available prior to closing, you may bring funds in accordance with the closing disclosure provided by your loan officer. (A personal check is acceptable for minor monetary differences)."
    },
    {
      info: "CAUTION - Do not wire any closing funds until you have confirmed the wire instructions with our firm. There have been instances of wire fraud, so please note that our bank is SunTrust Bank, and the name on our account is The Fryer Law Firm IOLTA and that information will not change. You should not wire any funds, if directed to any other bank or any other account name, do not respond and report it immediately to The Fryer Law Firm."
    }]
  }]

  hazardInsuranceList: any[]= [{
    title: 'Homeowners Hazard Insurance',
    subTitle: '',
    image: '../../../../assets/AtlantaMidtown3.jpg',
    more: [{
      info: "Original policy is required for closing (insurance binders are not acceptable)."
    },
    {
      info: "Dwelling coverage should be for full replacement cost of your home (variations must be approved by your lender)."
    },
    {
      info: "Your agent should fax to The Fryer Law Firm (at 404.848.9595) the declaration page of the policy prior to closing, along with the paid receipt or invoice."
    },
    {
      info: "Please provide this office with the insurance agent's name and telephone number for our follow up."
    },
    {
      info: "All borrowers on the loan documents must be the insured parties on the insurance policy."
    },
    {
      info: "Please contact this office immediately if any changes are made to the policy that affect the premium amount previously provided to us."
    }]
  }]

  titleInsuranceList: any[]= [{
    title: 'Owner\'s Title Insurance',
    subTitle: '',
    image: '../../../../assets/AtlantaMidtown3.jpg',
    more: [{
      info: "Recommended optional insurance to protect purchasers' ownership interest in the property."
    },
    {
      info: "One-time premium paid at closing will automatically be offered on your settlement statement."
    },
    {
      info: "For additional information, contact our office or view the \"Education Center\" section and the \"Rate Calculators\" section of this site."
    }]
  }]

  surveysList: any[]= [{
    title: 'Surveys',
    subTitle: '(Does not apply to a condominium unit purchase)',
    image: '../../../../assets/AtlantaMidtown3.jpg',
    more: [{
      info: "Usually not required by lenders (please check with your loan officer or processor about this requirement)."
    },
    {
      info: "Even if not required by a lender, a survey may be ordered by the purchaser and will be reviewed by our firm at purchaser's request."
    },
    {
      info: "This office recommends that a survey be done for the closing of any purchase transaction."
    },
    {
      info: "Surveys are approximately $400 - $500 depending on the lot dimensions and services requested."
    },
    {
      info: "For additional information or referrals, contact our office or review the Education Center of this site."
    }]
  }]

  powersOfAttorneyList: any[]= [{
    title: 'Powers of Attorney',
    subTitle: '',
    image: '../../../../assets/AtlantaMidtown3.jpg',
    more: [{
      info: "Utilized when one of the purchasers is unable to attend closing."
    },
    {
      info: "Must be approved by lender and closing attorney prior to closing."
    },
    {
      info: "Please contact this office if you would like The Fryer Law Firm to prepare a Power of Attorney for the purchaser."
    }]
  }]

  miscellaneousList: any[]= [{
    title: 'Miscellaneous Information',
    subTitle: '',
    image: '../../../../assets/AtlantaMidtown3.jpg',
    more: [{
      info: "If any monetary changes are made to your sales contract after your initial application, please advise this office and your lender as soon as possible."
    },
    {
      info: "All purchasers signing documents at closing must present some type of photo identification."
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
    this.purchasersTitleAnim = this.animationCtrl.create('myPurchasersTitleAnim');
    this.purchasersTitleAnim 
      .addElement(this.purchasersTitle.nativeElement)
      .duration(2000)
      .fromTo('transform', 'scale(0)', 'scale(1)')
      .fromTo('opacity', '0', '1');

    this.purchasersTitleAnim.play();
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

}
