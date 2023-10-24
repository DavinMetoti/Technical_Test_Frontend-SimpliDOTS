import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from './layout/app.layout.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list/category',
        pathMatch: 'full'
    },
    {
        path: 'list/search',
        redirectTo: 'list/category',
        pathMatch: 'full'
    },
    {
        path: 'list/genre',
        redirectTo: 'list/category',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: AppLayoutComponent,
        children: [
            { path: 'category', loadChildren: () => import('./package/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'genre', loadChildren: () => import('./package/components/genre/genre.module').then(m => m.GenreModule) },
            { path: 'search', loadChildren: () => import('./package/components/search/search.module').then(m => m.SearchModule) },
        ]
    },
    {
        path: 'detail',
        component: AppLayoutComponent,
        children: [
            { path: 'movie', loadChildren: () => import('./package/components/detail/detail.module').then(m => m.DetailModule) },
            { path: 'profile', loadChildren: () => import('./package/components/profile/profile.module').then(m => m.ProfileModule) },
        ]
    },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
