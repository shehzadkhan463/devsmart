import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { AppComponent } from './app.component';
import { FrontModule } from './front/front.module';
import { AdminModule } from './admin/admin.module';
import { FrontComponent } from './front/front.component';
const appRoutes: Routes = [
  { path: 'front', component: FrontComponent }
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // tslint:disable-next-line:max-line-length
    BrowserModule, BrowserAnimationsModule, MatButtonModule, MatCheckboxModule, FrontModule, AdminModule, RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
