import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController, Animation } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('myVideo') myVideo: ElementRef;
  // @ViewChild('homeTitle') homeTitle: ElementRef;
  @ViewChild('homeSubtitle') homeSubtitle: ElementRef;
  @ViewChild('purchasersCard') purchasersCard: ElementRef;
  @ViewChild('sellersCard') sellersCard: ElementRef;
  @ViewChild('staffCard') staffCard: ElementRef;
  // @ViewChild('contactCard') contactCard: ElementRef;

  homeTitleAnim: Animation;
  homeSubtitleAnim: Animation;
  purchasersCardAnim: Animation;
  sellersCardAnim: Animation;
  staffCardAnim: Animation;
  contactCardAnim: Animation;

  slideOpts = {
    autoplay: {
      delay: 7000,
    },
    loop: true,
    on: {
      beforeInit() {
        const swiper = this;
        swiper.classNames.push(`${swiper.params.containerModifierClass}fade`);
        const overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true,
        };
        swiper.params = Object.assign(swiper.params, overwriteParams);
        swiper.params = Object.assign(swiper.originalParams, overwriteParams);
      },
      setTranslate() {
        const swiper = this;
        const { slides } = swiper;
        for (let i = 0; i < slides.length; i += 1) {
          const $slideEl = swiper.slides.eq(i);
          const offset$$1 = $slideEl[0].swiperSlideOffset;
          let tx = -offset$$1;
          if (!swiper.params.virtualTranslate) tx -= swiper.translate;
          let ty = 0;
          if (!swiper.isHorizontal()) {
            ty = tx;
            tx = 0;
          }
          const slideOpacity = swiper.params.fadeEffect.crossFade
            ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
            : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
          $slideEl
            .css({
              opacity: slideOpacity,
            })
            .transform(`translate3d(${tx}px, ${ty}px, 0px)`);
        }
      },
      setTransition(duration) {
        const swiper = this;
        const { slides, $wrapperEl } = swiper;
        slides.transition(duration);
        if (swiper.params.virtualTranslate && duration !== 0) {
          let eventTriggered = false;
          slides.transitionEnd(() => {
            if (eventTriggered) return;
            if (!swiper || swiper.destroyed) return;
            eventTriggered = true;
            swiper.animating = false;
            const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
            for (let i = 0; i < triggerEvents.length; i += 1) {
              $wrapperEl.trigger(triggerEvents[i]);
            }
          });
        }
      },
    }
  }

  constructor(
    private animationCtrl: AnimationController,
    private router: Router
    ) {}

  async ngAfterViewInit() {
    // this.homeTitleAnim = this.animationCtrl.create('myhomeTitleAnim');
    // this.homeTitleAnim 
    //   .addElement(this.homeTitle.nativeElement)
    //   .duration(5000)
    //   .fromTo('transform', 'scale(0)', 'scale(1)')
    //   .fromTo('opacity', '0', '1');

    this.homeSubtitleAnim = this.animationCtrl.create('myhomeSubtitleAnim');
    this.homeSubtitleAnim 
      .addElement(this.homeSubtitle.nativeElement)
      .duration(3000)
      .fromTo('transform', 'scale(0)', 'scale(1)')
      .fromTo('opacity', '0', '1');
      // .fromTo('transform', 'translateY(800px)', 'translateY(0px)')
      // .fromTo('opacity', '0', '1');

    this.purchasersCardAnim = this.animationCtrl.create('myPurchasersCardAnim');
    this.purchasersCardAnim 
      .addElement(this.purchasersCard.nativeElement)
      .duration(1000)
      .keyframes([
        { offset: 0, transform: 'rotateY(0)' },
        { offset: 0.5, transform: 'rotateY(90deg)' }
      ])

    this.sellersCardAnim = this.animationCtrl.create('mysellersCardAnim');
    this.sellersCardAnim 
      .addElement(this.sellersCard.nativeElement)
      .duration(1000)
      .keyframes([
        { offset: 0, transform: 'rotateY(0)' },
        { offset: 0.5, transform: 'rotateY(90deg)' }
      ])  

    this.staffCardAnim = this.animationCtrl.create('mystaffCardAnim');
    this.staffCardAnim 
      .addElement(this.staffCard.nativeElement)
      .duration(1000)
      .keyframes([
        { offset: 0, transform: 'rotateY(0)' },
        { offset: 0.5, transform: 'rotateY(90deg)' }
      ])  
    
    // this.contactCardAnim = this.animationCtrl.create('mycontactCardAnim');
    // this.contactCardAnim 
    //   .addElement(this.contactCard.nativeElement)
    //   .duration(1000)
    //   .keyframes([
    //     { offset: 0, transform: 'rotateY(0)' },
    //     { offset: 0.5, transform: 'rotateY(90deg)' }
    //   ])  

    // this.homeTitleAnim.play();
    this.homeSubtitleAnim.play();
  }

  async videoEnd() {
    await this.myVideo.nativeElement.load();
    console.log('video ended!')
    this.myVideo.nativeElement.pause();
    // this.myVideo.nativeElement.removeAttribute("controls");
  }

  async goToPurchBorrowers() {
    await this.purchasersCardAnim.play();
    this.router.navigate(['/purchasers-borrowers']);
  }

  async goToSellers() {
    await this.sellersCardAnim.play();
    this.router.navigate(['/sellers'])
  }

  async goToStaff() {
    await this.staffCardAnim.play();
  }

  async goToContact() {
    await this.contactCardAnim.play();
  }
  
}
