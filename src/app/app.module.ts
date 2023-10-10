import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';

import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';
import { TooltipModule } from 'primeng/tooltip';
import { SidebarModule } from 'primeng/sidebar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { DetailComponent } from './components/detail/detail.component';
import { HeaderComponent } from './components/header/header.component';
import { FavoritComponent } from './components/favorit/favorit.component';
import { ApiService } from './service/api.service';
import { MovieService } from './service/movie.service';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DetailComponent,
    HeaderComponent,
    FavoritComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    HttpClientModule,
    RatingModule,
    FormsModule,
    InputTextModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    TooltipModule,
    SidebarModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [
    MessageService,
    DashboardComponent,
    HttpClientModule,
    ApiService,
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
