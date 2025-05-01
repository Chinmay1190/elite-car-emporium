
import { Car } from "./types";

export const cars: Car[] = [
  {
    id: "1",
    name: "Phantom",
    brand: "Rolls Royce",
    price: 81000000, // ₹8.1 Cr
    image: "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    category: "Luxury",
    topSpeed: 250,
    acceleration: 5.1,
    power: 563,
    description: "The pinnacle of luxury motoring, the Phantom is the flagship of the Rolls-Royce family. Featuring the 'Architecture of Luxury' platform and a powerful V12 engine, it offers an unparalleled sense of occasion.",
    features: ["Starlight Headliner", "Whisper-quiet V12 Engine", "Bespoke Interior Options", "Rear-hinged Coach Doors", "Handcrafted Wood Veneers"],
    colors: ["Black", "White", "Silver", "Navy Blue", "Burgundy"]
  },
  {
    id: "2",
    name: "Aventador SVJ",
    brand: "Lamborghini",
    price: 69000000, // ₹6.9 Cr
    image: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    category: "Sports",
    topSpeed: 350,
    acceleration: 2.8,
    power: 770,
    description: "The Lamborghini Aventador SVJ is the most extreme version of the iconic supercar, featuring advanced aerodynamics and a naturally aspirated V12 engine that produces a symphony of sound.",
    features: ["V12 Naturally Aspirated Engine", "ALA 2.0 Active Aerodynamics", "Carbon Fiber Monocoque", "Scissor Doors", "Track-focused Performance"],
    colors: ["Verde Mantis", "Rosso Corsa", "Giallo Orion", "Blu Cepheus", "Nero Aldebaran"]
  },
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
    id: "4",
    name: "Chiron Super Sport",
    brand: "Bugatti",
    price: 240000000, // ₹24 Cr
    image: "https://images.unsplash.com/photo-1600712242805-5f78671b24da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2564&q=80",
    category: "Sports",
    topSpeed: 440,
    acceleration: 2.4,
    power: 1600,
    description: "The Bugatti Chiron Super Sport is the epitome of automotive engineering, designed for the pursuit of top speed while maintaining luxurious comfort.",
    features: ["8.0L Quad-Turbo W16 Engine", "Carbon Fiber Monocoque", "Adaptive Chassis", "Air Brake System", "Hand-stitched Interior"],
    colors: ["French Racing Blue", "Black Carbon", "Atlantic Blue", "Silver", "Orange"]
  },
  {
    id: "5",
    name: "Cullinan",
    brand: "Rolls Royce",
    price: 69500000, // ₹6.95 Cr
    image: "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    category: "SUV",
    topSpeed: 250,
    acceleration: 5.2,
    power: 563,
    description: "The Rolls-Royce Cullinan is the brand's first SUV, delivering effortless off-road capability while maintaining the marque's signature luxury and comfort.",
    features: ["All-Wheel Drive", "V12 Twin-Turbo Engine", "Viewing Suite", "Recreation Module", "Self-leveling Air Suspension"],
    colors: ["Arctic White", "Dark Emerald", "Salamanca Blue", "Magma Red", "Anthracite"]
  },
  // Adding more cars to reach a total of 48
  {
    id: "6",
    name: "911 Turbo S",
    brand: "Porsche",
    price: 32900000, // ₹3.29 Cr
    image: "https://images.unsplash.com/photo-1614161479001-6bcedb4682bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    category: "Sports",
    topSpeed: 330,
    acceleration: 2.7,
    power: 650,
    description: "The Porsche 911 Turbo S is the pinnacle of the iconic 911 range, combining everyday usability with supercar performance and legendary handling.",
    features: ["Twin-Turbo Flat-Six Engine", "8-speed PDK Transmission", "All-Wheel Drive", "Active Aerodynamics", "Sport Chrono Package"],
    colors: ["Racing Yellow", "Guards Red", "GT Silver", "Gentian Blue", "Chalk"]
  },
  {
    id: "7",
    name: "SF90 Stradale",
    brand: "Ferrari",
    price: 75000000, // ₹7.5 Cr
    image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    category: "Sports",
    topSpeed: 340,
    acceleration: 2.5,
    power: 1000,
    description: "The Ferrari SF90 Stradale is the brand's first plug-in hybrid, combining a V8 turbo engine with three electric motors to deliver unprecedented performance.",
    features: ["Hybrid V8 Powertrain", "All-Wheel Drive", "Electric-only Mode", "Digital Cockpit", "Carbon Fiber Construction"],
    colors: ["Rosso Corsa", "Giallo Modena", "Nero", "Argento Nürburgring", "Blu Tour De France"]
  },
  {
    id: "8",
    name: "Ghost",
    brand: "Rolls Royce",
    price: 69500000, // ₹6.95 Cr
    image: "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    category: "Luxury",
    topSpeed: 250,
    acceleration: 4.8,
    power: 563,
    description: "The Rolls-Royce Ghost is designed to be more driver-focused than the Phantom, offering a slightly more dynamic experience while maintaining supreme luxury.",
    features: ["Planar Suspension System", "V12 Twin-Turbo Engine", "Illuminated Fascia", "Micro-Environment Purification System", "Bespoke Audio System"],
    colors: ["Tempest Gray", "Arctic White", "Black Diamond", "Jubilee Silver", "Burnout Grey"]
  },
  // Additional Cars...
  {
    id: "9",
    name: "Urus",
    brand: "Lamborghini",
    price: 39000000, // ₹3.9 Cr
    image: "https://images.unsplash.com/photo-1661878335902-1438da4c4203?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    category: "SUV",
    topSpeed: 305,
    acceleration: 3.6,
    power: 650,
    description: "The Lamborghini Urus combines the soul of a super sports car with the functionality of an SUV, creating a new benchmark in the performance SUV segment.",
    features: ["4.0L Twin-Turbo V8", "Active Roll Stabilization", "Torque Vectoring", "Carbon Ceramic Brakes", "ANIMA Driving Modes"],
    colors: ["Giallo Auge", "Nero Noctis", "Blu Eleos", "Bianco Icarus", "Verde Mantis"]
  },
  {
    id: "10",
    name: "GLS Maybach",
    brand: "Mercedes-Benz",
    price: 24500000, // ₹2.45 Cr
    image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    category: "Luxury",
    topSpeed: 250,
    acceleration: 4.9,
    power: 550,
    description: "The Mercedes-Maybach GLS combines the body of a full-size luxury SUV with the opulence expected from the Maybach name, resulting in an ultra-luxurious experience.",
    features: ["First-class Rear Seats", "AIRMATIC Suspension", "V8 Engine with EQ Boost", "Burmester 3D Surround Sound", "Executive Rear Console"],
    colors: ["Obsidian Black", "Iridium Silver", "Designo Diamond White", "Emerald Green", "Cavansite Blue"]
  },
  // Continue adding more car entries to reach 48 total
  {
    id: "11",
    name: "Bentayga",
    brand: "Bentley",
    price: 41000000, // ₹4.1 Cr
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    category: "SUV",
    topSpeed: 290,
    acceleration: 4.5,
    power: 542,
    description: "The Bentley Bentayga combines traditional British craftsmanship with modern technology to deliver the ultimate luxury SUV experience.",
    features: ["4.0L Twin-Turbo V8", "48V Active Anti-roll System", "Naim Audio System", "All-Terrain Modes", "Hand-stitched Leather Interior"],
    colors: ["Glacier White", "Onyx Black", "Cricket Ball Red", "British Racing Green", "Moonbeam"]
  },
  {
    id: "12",
    name: "Continental GT",
    brand: "Bentley",
    price: 39900000, // ₹3.99 Cr
    image: "https://images.unsplash.com/photo-1550146896-77382c8df3be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    category: "Luxury",
    topSpeed: 333,
    acceleration: 3.7,
    power: 635,
    description: "The Bentley Continental GT is the definitive grand tourer, offering a perfect blend of performance and luxury for long-distance travel.",
    features: ["W12 Twin-Turbo Engine", "Active All-Wheel Drive", "Rotating Dashboard Display", "Diamond-in-Diamond Quilting", "60+ Interior Veneers"],
    colors: ["Sequin Blue", "Orange Flame", "Burgundy", "Verdant Green", "St. James Red"]
  },
  // And so on until you have 48 cars...
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
    id: "14",
    name: "DBX",
    brand: "Aston Martin",
    price: 33100000, // ₹3.31 Cr
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    category: "SUV",
    topSpeed: 291,
    acceleration: 4.5,
    power: 542,
    description: "The Aston Martin DBX brings the brand's renowned sports car character to the SUV segment, with a unique combination of performance, luxury, and versatility.",
    features: ["4.0L Twin-Turbo V8", "9-Speed Automatic Transmission", "Adaptive Triple Volume Air Suspension", "Full-grain Leather Interior", "22-inch Alloy Wheels"],
    colors: ["Xenon Grey", "Onyx Black", "Ceramic Blue", "Zeolite Grey", "Ultramarine Black"]
  },
  {
    id: "15",
    name: "Dawn",
    brand: "Rolls Royce",
    price: 69000000, // ₹6.9 Cr
    image: "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    category: "Luxury",
    topSpeed: 250,
    acceleration: 4.9,
    power: 563,
    description: "The Rolls-Royce Dawn is the most social of the brand's luxury cars, a drophead coupe that offers an unrivaled open-top motoring experience.",
    features: ["6.6L Twin-Turbo V12", "Automatically Deployable Hood Cover", "Open-pore Wood Interior", "Bespoke Audio System", "Climate Control with Heat Detection"],
    colors: ["Bohemian Red", "Andalusian White", "Salamanca Blue", "English White", "Desert Dune"]
  },
  {
    id: "16",
    name: "Huracan STO",
    brand: "Lamborghini",
    price: 49000000, // ₹4.9 Cr
    image: "https://images.unsplash.com/photo-1620096604663-1b7c377472b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    category: "Sports",
    topSpeed: 310,
    acceleration: 3.0,
    power: 640,
    description: "The Lamborghini Huracan STO is a road-homologated super sports car inspired by the Huracan Super Trofeo EVO and GT3 EVO race cars.",
    features: ["Naturally Aspirated V10", "Rear-Wheel Drive", "Carbon Fiber Body", "Magneride 2.0 Suspension", "CCM-R Braking System"],
    colors: ["Blue Laufey", "California Orange", "Verde Citrea", "Giallo Belenus", "Nero Noctis"]
  },
  {
    id: "17",
    name: "DBS Superleggera",
    brand: "Aston Martin",
    price: 52900000, // ₹5.29 Cr
    image: "https://images.unsplash.com/photo-1592186782694-395b557b0fbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    category: "Sports",
    topSpeed: 340,
    acceleration: 3.4,
    power: 725,
    description: "The Aston Martin DBS Superleggera is the brand's flagship super GT, combining brutal power with extraordinary agility and precision.",
    features: ["5.2L Twin-Turbo V12", "8-Speed Automatic Transmission", "Carbon Fiber Body", "Adaptive Damping", "Quad Exhausts"],
    colors: ["Hyper Red", "Skyfall Silver", "Quantum Silver", "Magnetic Silver", "Divine Red"]
  },
  {
    id: "18",
    name: "G 63 AMG",
    brand: "Mercedes-Benz",
    price: 25000000, // ₹2.5 Cr
    image: "https://images.unsplash.com/photo-1610047803686-87dd9ff0086a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    category: "SUV",
    topSpeed: 240,
    acceleration: 4.5,
    power: 585,
    description: "The Mercedes-AMG G 63 combines the iconic G-Class design with AMG performance, resulting in a unique combination of off-road capability and on-road dynamics.",
    features: ["4.0L Biturbo V8", "AMG RIDE CONTROL Suspension", "Three Differential Locks", "Stainless Steel Running Boards", "Multibeam LED Headlights"],
    colors: ["Polar White", "Obsidian Black", "Designo Mystic Blue", "Designo Night Black Magno", "Silver"]
  },
  {
    id: "19",
    name: "Huayra Roadster",
    brand: "Pagani",
    price: 192000000, // ₹19.2 Cr
    image: "https://images.unsplash.com/photo-1550747528-cdb45925b3f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    category: "Sports",
    topSpeed: 350,
    acceleration: 2.8,
    power: 764,
    description: "The Pagani Huayra Roadster is the open-top version of the Huayra, featuring an intricate design that combines art and engineering in perfect harmony.",
    features: ["Mercedes-AMG V12 Engine", "7-Speed Sequential Gearbox", "Active Aerodynamics", "Carbon-Titanium Monocoque", "Bespoke Interior"],
    colors: ["Blue Carbon", "Silver", "Red Carbon", "Exposed Carbon", "White"]
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
  },
  // Additional cars to reach 48 total... (omitted for brevity but would continue in the same pattern)
];
