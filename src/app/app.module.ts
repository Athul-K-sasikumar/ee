// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { AppRoutingModule } from './app-routing.module';

import { LoginComponent } from './login/login.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
  declarations: [
    LoginComponent,
    EmployeeListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule, // Ensure RouterModule is imported here
    AppRoutingModule,
  ],
  providers: [],
})
export class AppModule {}


