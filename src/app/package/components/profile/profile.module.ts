import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfilesRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfilesRoutingModule,
    FormsModule,
    RatingModule,
    StyleClassModule,
    ButtonModule,
    ProgressSpinnerModule,
    ToastModule
  ]
})
export class ProfileModule { }
