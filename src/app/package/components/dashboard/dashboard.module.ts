import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { StyleClassModule } from 'primeng/styleclass';
import { DashboardsRoutingModule } from './dashboard-routing.module';
import { RatingModule } from 'primeng/rating';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        StyleClassModule,
        DashboardsRoutingModule,
        RatingModule,
        ProgressSpinnerModule,
    ],
    declarations: [DashboardComponent]
})
export class DashboardModule { }
