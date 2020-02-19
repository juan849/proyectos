import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListMembersComponent } from './list-members/list-members.component';



const routes: Routes = [ {
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
},
{path:'list-members/:house', component: ListMembersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
