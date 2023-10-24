import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GenreComponent } from './genre.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: ':id', component: GenreComponent }

    ])],
    exports: [RouterModule]
})
export class GenresRoutingModule { }
