import { NgModule, isDevMode } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from 'src/environments/environment';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production
        }),
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
