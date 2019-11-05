import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from '@shared/shared.module';
import {CoreModule} from '@core/core.module';
import {ConfiguratorModule} from '@configurator/configurator.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, SharedModule, ConfiguratorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
