import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DetailComponent } from './detail.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: ':id', component: DetailComponent }

    ])],
    exports: [RouterModule]
})
export class DetailssRoutingModule { }
