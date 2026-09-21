export interface Ex18Customer {
  Id: string;
  Name: string;
  Email: string;
  Age: number;
  Image: string;
}

export interface Ex18CustomerGroup {
  CustomerTypeId: number;
  CustomterTypeName: string;
  Customers: Ex18Customer[];
}
