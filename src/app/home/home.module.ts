import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingHomeModule } from './routing-home-module';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
    imports: [
      CommonModule,
      RoutingHomeModule,
      BrowserModule,
      NgxDatatableModule
    ],
    declarations: [
        HomeComponent
        
    ]
  })
  export class HomeModule { 
 
  }


  