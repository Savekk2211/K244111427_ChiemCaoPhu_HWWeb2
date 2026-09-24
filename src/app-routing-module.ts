import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ex18CustomerGroup } from './ex18-customer-group/ex18-customer-group';

const routes: Routes = [
  { path: '', redirectTo: 'ex18-customer-group', pathMatch: 'full' },
  { path: 'ex18-customer-group', component: Ex18CustomerGroup },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
