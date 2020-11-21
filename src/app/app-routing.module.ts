import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/guards/auth-guard.service';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuardService],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'digital-document-list',
    loadChildren: () => import(
      './pages/digitalDocument/digital-document-list/digital-document-list.module')
    .then( m => m.DigitalDocumentListPageModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'digital-document-create',
    loadChildren: () => import('./pages/digitalDocument/digital-document-create/digital-document-create.module')
    .then( m => m.DigitalDocumentCreatePageModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'new-account',
    loadChildren: () => import('./pages/auth/new-account/new-account.module').then( m => m.NewAccountPageModule)
  },
  {
    path: 'digital-document-user-list',
    loadChildren: () => import('./pages/digitalDocument/digital-document-user-list/digital-document-user-list.module').then( m => m.DigitalDocumentUserListPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
