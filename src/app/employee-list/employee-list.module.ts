import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule here too
import { EmployeeListComponent } from './employee-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,  // Import FormsModule for two-way binding
  ]
})
export class EmployeeListModule {}
