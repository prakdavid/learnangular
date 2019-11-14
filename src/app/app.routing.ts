import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages/index',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'pages/index'
  }
];

export const routing = RouterModule.forRoot(routes);
