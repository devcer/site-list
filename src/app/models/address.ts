export class Address {
  zipCode: string;
  city: string;
  street: string;
  country: string;
  state: string;
  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
  getShortAddress(): string {
    return `${this.state}, ${this.country}`;
  }
  getFullAddress(): string {
    return `${this.street}, ${this.city}, ${this.state}, ${this.country} - ${this.zipCode}`;
  }
}
