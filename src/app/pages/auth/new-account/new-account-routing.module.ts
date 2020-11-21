import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewAccountPage } from './new-account.page';

const routes: Routes = [
  {
    path: '',
    component: NewAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewAccountPageRoutingModule {}
