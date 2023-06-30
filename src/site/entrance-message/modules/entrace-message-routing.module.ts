import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntranceMessageComponent } from '../entrance-message.component';

const routes: Routes = [
  {path:'', component: EntranceMessageComponent},
  // {path:'provided-services', component: ProvidedServicesComponent},
  // {path:'entrace-message', component: EntranceMessageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntraceMessageRoutingModule { }
