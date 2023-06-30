import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/shared/modules/material.module';
import { RouterModule } from '@angular/router';
import { ProvidedServicesRoutingModule } from './provided-services-routing.module';
import { ProvidedServicesComponent } from '../provided-services.component';
import { ProvidedServicesDirective } from 'src/site/provided-services/directives/provided-services.directive';

@NgModule({
  declarations: [
    ProvidedServicesComponent,
    ProvidedServicesDirective,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ProvidedServicesRoutingModule
  ],
  exports:[
    ProvidedServicesComponent,
   ]
})
export class ProvidedServicesModule { }
