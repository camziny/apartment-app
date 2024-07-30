export interface ApartmentFormData {
  name: string;
  description: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface ApartmentData extends ApartmentFormData {
  id: number;
}

export interface Apartment {
  id: number;
  name: string;
  description: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  createdAt: string;
  updatedAt: string;
}
