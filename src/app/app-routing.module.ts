import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'provided-services', loadChildren: () => import('../site/provided-services/modules/provided-services-routing.module').then(x => x.ProvidedServicesRoutingModule) },
  { path: 'entrace-message', loadChildren: () => import('../site/entrance-message/modules/entrace-message-routing.module').then(x => x.EntraceMessageRoutingModule) },
];
// {path:'provided-services', component: ProvidedServicesComponent},
// {path:'entrace-message', component: EntranceMessageComponent}
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
