import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { DocsModule } from './docs/docs.module';
const appRoutes: Routes = [
  { path: 'admin', component: AdminComponent }
];
@NgModule({
  imports: [
    CommonModule,  RouterModule.forRoot(appRoutes, {enableTracing: true}), DocsModule
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
