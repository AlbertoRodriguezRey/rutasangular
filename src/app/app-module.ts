import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { HomeComponent } from '../components/home/home.component';
import { CineComponent } from '../components/cine/cine.component';
import { MusicaComponent } from '../components/musica/musica.component';

import { routing, appRoutingProvider } from './app.routing';
import { MenuComponent } from '../components/menu/menu.component';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    CineComponent,
    MusicaComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    appRoutingProvider
  ],
  bootstrap: [App]
})
export class AppModule { }
