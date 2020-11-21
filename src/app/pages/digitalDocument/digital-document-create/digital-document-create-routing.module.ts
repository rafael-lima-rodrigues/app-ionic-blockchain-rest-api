import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DigitalDocumentCreatePage } from './digital-document-create.page';

const routes: Routes = [
  {
    path: '',
    component: DigitalDocumentCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DigitalDocumentCreatePageRoutingModule {}
