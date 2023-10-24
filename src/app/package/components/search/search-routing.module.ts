import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: ':keyword', component: SearchComponent }

    ])],
    exports: [RouterModule]
})
export class SearchsRoutingModule { }
