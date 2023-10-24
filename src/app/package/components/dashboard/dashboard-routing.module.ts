import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', redirectTo: 'now_playing', pathMatch: 'full' },
        { path: ':category', component: DashboardComponent }

    ])],
    exports: [RouterModule]
})
export class DashboardsRoutingModule { }
