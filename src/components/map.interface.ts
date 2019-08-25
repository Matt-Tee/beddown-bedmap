export interface ProviderType {
  key: number;
  geoLocation: number[];
  address: Address;
  bedsAmount: number;
  bedsAvailable: number;
  gender: string;
  nameOfBuilding?: string;
}

export interface Address {
  unit?: string | number;
  number: number;
  street: string;
  suburb: string;
  city: string;
  state: string;
  postcode: number;
}
