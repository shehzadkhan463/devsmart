import { FrontComponent } from './front.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GridComponent } from './grid/grid.component';

import {MatToolbarModule, MatMenuModule} from '@angular/material';
@NgModule({
  imports: [
    CommonModule, MatToolbarModule, MatMenuModule
  ],
  declarations: [FrontComponent, LoginComponent, NavbarComponent, GridComponent],
  exports: [FrontComponent]
})
export class FrontModule { }
