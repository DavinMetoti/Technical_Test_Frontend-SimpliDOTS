import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetailComponent } from './components/detail/detail.component';
import { FavoritComponent } from './components/favorit/favorit.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Rute kosong diarahkan ke 'dashboard'
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'favorit', component: FavoritComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
