import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListcompanyComponent } from './components/listcompany/listcompany.component';
import { AddcompanyComponent } from './components/addcompany/addcompany.component';
import { EditcompanyComponent } from './components/editcompany/editcompany.component';

const routers: Routes = [
  { path: '', component: ListcompanyComponent },
  { path: 'listcompany', component: ListcompanyComponent },
  { path: 'addcompany', component: AddcompanyComponent },
  { path: 'editcompany/:globalID', component: EditcompanyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routers)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
