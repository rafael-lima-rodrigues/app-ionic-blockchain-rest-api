import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DigitalDocumentUserListPageRoutingModule } from './digital-document-user-list-routing.module';

import { DigitalDocumentUserListPage } from './digital-document-user-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DigitalDocumentUserListPageRoutingModule
  ],
  declarations: [DigitalDocumentUserListPage]
})
export class DigitalDocumentUserListPageModule {}
