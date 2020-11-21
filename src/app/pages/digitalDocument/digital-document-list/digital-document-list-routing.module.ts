import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DigitalDocumentListPage } from './digital-document-list.page';

const routes: Routes = [
  {
    path: '',
    component: DigitalDocumentListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DigitalDocumentListPageRoutingModule {}
