import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { CompanyReducer } from './reducers/company.reducers';
import { EffectsModule } from '@ngrx/effects';
import {CompanyEffect} from './effects/company.effect';
import { ListcompanyComponent } from './components/listcompany/listcompany.component';
import { AddcompanyComponent } from './components/addcompany/addcompany.component';
import { EditcompanyComponent } from './components/editcompany/editcompany.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ListcompanyComponent,
    AddcompanyComponent,
    EditcompanyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    EffectsModule.forRoot([CompanyEffect]),
    StoreModule.forRoot({
      companyList: CompanyReducer,
      company: CompanyReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
