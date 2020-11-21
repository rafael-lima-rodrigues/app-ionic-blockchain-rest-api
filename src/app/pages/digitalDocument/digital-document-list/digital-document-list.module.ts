import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DigitalDocumentListPageRoutingModule } from './digital-document-list-routing.module';

import { DigitalDocumentListPage } from './digital-document-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DigitalDocumentListPageRoutingModule
  ],
  declarations: [DigitalDocumentListPage]
})
export class DigitalDocumentListPageModule {}
