import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ex18CustomerGroup } from '../ex18-customer';

@Injectable({
  providedIn: 'root',
})
export class Ex18CustomerService {
  private readonly url = 'assets/data/customers.json';

  constructor(private readonly http: HttpClient) {}

  getCustomerGroups(): Observable<Ex18CustomerGroup[]> {
    return this.http.get<Ex18CustomerGroup[]>(this.url);
  }
}
