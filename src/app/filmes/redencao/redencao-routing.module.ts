import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedencaoPage } from './redencao.page';

const routes: Routes = [
  {
    path: '',
    component: RedencaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedencaoPageRoutingModule {}
