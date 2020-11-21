import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewAccountPage } from './new-account.page';

describe('NewAccountPage', () => {
  let component: NewAccountPage;
  let fixture: ComponentFixture<NewAccountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAccountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
