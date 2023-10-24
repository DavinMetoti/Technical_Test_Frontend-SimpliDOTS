import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { DetailssRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';



@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    DetailssRoutingModule,
    FormsModule,
    RatingModule,
    ButtonModule,
    ToastModule,
    DialogModule
  ]
})
export class DetailModule { }
