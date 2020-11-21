import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DigitalDocumentUserListPage } from './digital-document-user-list.page';

describe('DigitalDocumentUserListPage', () => {
  let component: DigitalDocumentUserListPage;
  let fixture: ComponentFixture<DigitalDocumentUserListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalDocumentUserListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DigitalDocumentUserListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
