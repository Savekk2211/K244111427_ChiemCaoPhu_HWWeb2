import { Component, signal } from '@angular/core';
import { Ex18CustomerGroup as Ex18CustomerGroupModel } from '../ex18-customer';
import { Ex18CustomerService } from '../services/ex18-customer-service';

@Component({
  selector: 'app-ex18-customer-group',
  standalone: false,
  templateUrl: './ex18-customer-group.html',
  styleUrl: './ex18-customer-group.css',
})
export class Ex18CustomerGroup {
  customerGroups = signal<Ex18CustomerGroupModel[]>([]);
  errorMessage = signal('');

  constructor(private readonly customerService: Ex18CustomerService) {}

  ngOnInit(): void {
    this.customerService.getCustomerGroups().subscribe({
      next: (groups) => this.customerGroups.set(groups),
      error: () => this.errorMessage.set('Không thể tải danh sách khách hàng.'),
    });
  }
}
