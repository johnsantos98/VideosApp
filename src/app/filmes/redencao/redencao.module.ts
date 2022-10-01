import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedencaoPageRoutingModule } from './redencao-routing.module';

import { RedencaoPage } from './redencao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedencaoPageRoutingModule
  ],
  declarations: [RedencaoPage]
})
export class RedencaoPageModule {}
