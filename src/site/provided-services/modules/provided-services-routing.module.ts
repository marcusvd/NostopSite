import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvidedServicesComponent } from '../provided-services.component';

const routes: Routes = [
  // {path:'', component: EntranceMessageComponent},
  {path:'', component: ProvidedServicesComponent},
  // {path:'provided-services', component: ProvidedServicesComponent},
  // {path:'entrace-message', component: EntranceMessageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProvidedServicesRoutingModule { }
