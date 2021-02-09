import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PurchasersBorrowersPage } from './purchasers-borrowers.page';

describe('PurchasersBorrowersPage', () => {
  let component: PurchasersBorrowersPage;
  let fixture: ComponentFixture<PurchasersBorrowersPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasersBorrowersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PurchasersBorrowersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
