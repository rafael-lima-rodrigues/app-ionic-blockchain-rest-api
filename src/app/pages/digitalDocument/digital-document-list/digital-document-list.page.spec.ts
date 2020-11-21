import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DigitalDocumentListPage } from './digital-document-list.page';

describe('DigitalDocumentListPage', () => {
  let component: DigitalDocumentListPage;
  let fixture: ComponentFixture<DigitalDocumentListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalDocumentListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DigitalDocumentListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
