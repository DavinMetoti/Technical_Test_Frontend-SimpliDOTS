import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenreComponent } from './genre.component';
import { GenresRoutingModule } from './genre-routing.module';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [
    GenreComponent
  ],
  imports: [
    CommonModule,
    GenresRoutingModule,
    FormsModule,
    RatingModule,
    ButtonModule,
    StyleClassModule,
    ProgressSpinnerModule
  ],
})
export class GenreModule { }
