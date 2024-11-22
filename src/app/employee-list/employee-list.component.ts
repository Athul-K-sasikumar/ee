import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent {
  employees = [
    { name: 'John Doe', contact: '1234567890', email: 'john@example.com', address: '123 Street' },
    { name: 'Jane Smith', contact: '9876543210', email: 'jane@example.com', address: '456 Avenue' },
    { name: '', contact: '', email: '', address: '' },



    
  ];

  newEmployee = { name: '', contact: '', email: '', address: '' };

  addEmployee() {
    
      this.employees.push({ ...this.newEmployee }); // Add employee to the list
      this.employees = [...this.employees]; // Ensure change detection
      console.log('Updated Employees:', this.employees);
      alert(`${this.newEmployee.name}`)
    
  }

  closeModal() {
    this.newEmployee = { name: '', contact: '', email: '', address: '' }; // Reset fields
  }
}
