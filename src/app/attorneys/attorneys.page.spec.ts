import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AttorneysPage } from './attorneys.page';

describe('AttorneysPage', () => {
  let component: AttorneysPage;
  let fixture: ComponentFixture<AttorneysPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttorneysPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AttorneysPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
