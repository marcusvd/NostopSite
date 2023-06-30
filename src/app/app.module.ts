import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from 'src/shared/modules/material.module';
import { SharedModule } from 'src/shared/modules/shared.module';
import { WelcomeComponent } from 'src/site/welcome/welcome.component';
import { FooterComponent } from 'src/site/footer/footer.component';
import { MainToolBarComponent } from 'src/site/tool-bar/main-tool-bar.component';
import { ProvidedServicesModule } from 'src/site/provided-services/modules/provided-services.module';
import { EntraceMessageModule } from 'src/site/entrance-message/modules/entrace-message.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    FooterComponent,
    MainToolBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    EntraceMessageModule,
    ProvidedServicesModule,
    SharedModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
