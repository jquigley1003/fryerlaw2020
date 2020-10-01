import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('myVideo') myVideo: ElementRef;

  constructor() {}

  async videoEnd() {
    await this.myVideo.nativeElement.load();
    console.log('video ended!')
    this.myVideo.nativeElement.pause();
    this.myVideo.nativeElement.removeAttribute("controls");
  }
  
}
