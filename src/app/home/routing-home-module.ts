
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


const routes: Routes = [
    {
        path:"",
        children: [{
            path: 'home',
            component: HomeComponent,
        }
    ],

    }
]

@NgModule({
    imports: [RouterModule.forChild(routes), NgxDatatableModule],
    exports: [RouterModule],
  })
  export class RoutingHomeModule { }