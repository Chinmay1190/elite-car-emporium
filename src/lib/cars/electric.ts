
import { Car } from "../types";

export const electricCars: Car[] = [
  {
    id: "3",
    name: "Model S Plaid",
    brand: "Tesla",
    price: 22000000, // ₹2.2 Cr
    image: "https://images.unsplash.com/photo-1617704548623-340376564e68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    category: "Electric",
    topSpeed: 322,
    acceleration: 2.1,
    power: 1020,
    description: "The Tesla Model S Plaid is the fastest accelerating production car ever made, with three high-performance motors and torque vectoring for unprecedented control.",
    features: ["1020hp Electric Powertrain", "17\" Touchscreen Display", "Full Self-Driving Capability", "Over-the-air Updates", "Autopilot"],
    colors: ["Pearl White", "Solid Black", "Deep Blue Metallic", "Red Multi-Coat", "Ultra Red"]
  },
  {
    id: "13",
    name: "Taycan Turbo S",
    brand: "Porsche",
    price: 23500000, // ₹2.35 Cr
    image: "https://images.unsplash.com/photo-1615531880536-c93cc07875a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    category: "Electric",
    topSpeed: 260,
    acceleration: 2.8,
    power: 750,
    description: "The Porsche Taycan Turbo S is the brand's first all-electric sports car, offering incredible performance with zero emissions.",
    features: ["Dual Electric Motors", "800-Volt Architecture", "Over-the-air Updates", "Porsche Active Suspension Management", "Two-speed Transmission"],
    colors: ["Frozen Blue Metallic", "Carmine Red", "Jet Black Metallic", "Ice Grey Metallic", "Coffee Beige Metallic"]
  },
  {
    id: "20",
    name: "Rimac Nevera",
    brand: "Rimac",
    price: 180000000, // ₹18 Cr
    image: "https://images.unsplash.com/photo-1617704548623-340376564e68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    category: "Electric",
    topSpeed: 412,
    acceleration: 1.85,
    power: 1914,
    description: "The Rimac Nevera is an all-electric hypercar that redefines performance with four electric motors and advanced technology throughout.",
    features: ["Quad Electric Motor Setup", "120kWh Battery Pack", "Carbon Fiber Monocoque", "Torque Vectoring", "AI Driving Coach"],
    colors: ["Stellar Black", "Callisto Green", "Galactic White", "Atlantis Blue", "Sunburst Red"]
  }
];
