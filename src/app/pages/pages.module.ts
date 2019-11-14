import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { routing } from './pages.routing';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    routing,
    CommonModule,
    SharedModule
  ]
})
export class PagesModule { }
