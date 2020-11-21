import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DigitalDocumentCreatePageRoutingModule } from './digital-document-create-routing.module';

import { DigitalDocumentCreatePage } from './digital-document-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DigitalDocumentCreatePageRoutingModule
  ],
  declarations: [DigitalDocumentCreatePage]
})
export class DigitalDocumentCreatePageModule {}
