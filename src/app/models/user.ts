import { Address } from "./address";

export class User {
  id: string = '';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phoneNumber: string = '';
  jobTitle: string = '';
  address: Address;
  deserialize(input: any): this {
    Object.assign(this, input);
    this.address = new Address().deserialize(input.address);
    return this;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
