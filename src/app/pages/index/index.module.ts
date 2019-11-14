import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './index.routing';
import { IndexComponent } from './index.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    routing,
    SharedModule
  ]
})
export class IndexModule { }
