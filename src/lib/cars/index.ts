
import { Car } from "../types";
import { luxuryCars } from "./luxury";
import { sportsCars } from "./sports";
import { suvCars } from "./suv";
import { electricCars } from "./electric";
import { sedanCars } from "./sedan";

// Combine all cars from different categories
export const cars: Car[] = [
  ...luxuryCars,
  ...sportsCars,
  ...suvCars,
  ...electricCars,
  ...sedanCars
];
