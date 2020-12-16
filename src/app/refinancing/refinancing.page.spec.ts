import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RefinancingPage } from './refinancing.page';

describe('RefinancingPage', () => {
  let component: RefinancingPage;
  let fixture: ComponentFixture<RefinancingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefinancingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RefinancingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
