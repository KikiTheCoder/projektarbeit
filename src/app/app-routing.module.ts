import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageBerufskarteComponent } from './pages/page-berufskarte/page-berufskarte.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: "", component: PageHomeComponent, pathMatch: "full"},
  {path: "berufskarte", component: PageBerufskarteComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
