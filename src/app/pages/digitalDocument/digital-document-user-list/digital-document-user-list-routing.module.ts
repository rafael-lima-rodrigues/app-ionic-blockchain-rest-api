import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DigitalDocumentUserListPage } from './digital-document-user-list.page';

const routes: Routes = [
  {
    path: '',
    component: DigitalDocumentUserListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DigitalDocumentUserListPageRoutingModule {}
