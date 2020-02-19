import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ServiceMSE } from './services/service-mse';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ListMembersComponent } from './list-members/list-members.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListMembersComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    NgxDatatableModule,
    FormsModule
    
  ],
  providers: [ServiceMSE],
  bootstrap: [AppComponent]
})
export class AppModule { }
