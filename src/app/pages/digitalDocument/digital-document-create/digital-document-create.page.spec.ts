import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DigitalDocumentCreatePage } from './digital-document-create.page';

describe('DigitalDocumentCreatePage', () => {
  let component: DigitalDocumentCreatePage;
  let fixture: ComponentFixture<DigitalDocumentCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalDocumentCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DigitalDocumentCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
