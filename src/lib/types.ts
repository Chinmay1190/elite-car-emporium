
export interface Car {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  category: string;
  topSpeed: number;
  acceleration: number;
  power: number;
  description: string;
  features: string[];
  colors: string[];
}

export interface CartItem extends Car {
  quantity: number;
  color: string;
}

export type Category = "Sports" | "Luxury" | "SUV" | "Sedan" | "Electric";
