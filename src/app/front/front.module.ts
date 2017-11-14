import { FrontComponent } from './front.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GridComponent } from './grid/grid.component';

// tslint:disable-next-line:max-line-length
import { MatToolbarModule, MatMenuModule, MatButtonModule, MatGridListModule, MatFormFieldModule, MatInputModule, MatIconModule } from '@angular/material';
const appRoutes: Routes = [
  { path: 'front', component: FrontComponent }
];

@NgModule({
  imports: [
    // tslint:disable-next-line:max-line-length
    CommonModule, MatToolbarModule, MatMenuModule, MatButtonModule, MatGridListModule, MatFormFieldModule,  MatInputModule, MatIconModule, RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  declarations: [FrontComponent, LoginComponent, NavbarComponent, GridComponent],
  exports: [FrontComponent]
})
export class FrontModule { }
