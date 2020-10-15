import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-see-info-modal',
  templateUrl: './see-info-modal.component.html',
  styleUrls: ['./see-info-modal.component.scss'],
})
export class SeeInfoModalComponent implements OnInit {
  information: any[] = this.navParams.get('info');
  moreInfo: any[];
  subTitle: string;
  
  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    // console.log(this.information);
    this.moreInfo = this.information[0].more;
    this.subTitle = this.information[0].subTitle;
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}
