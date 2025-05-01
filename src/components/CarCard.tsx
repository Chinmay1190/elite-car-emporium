
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BadgeIndianRupee } from "lucide-react";
import { Car } from "@/lib/types";

const formatIndianPrice = (price: number): string => {
  const formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  });
  return formatter.format(price);
};

interface CarCardProps {
  car: Car;
}

const CarCard = ({ car }: CarCardProps) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col transition-shadow hover:shadow-lg">
      <div className="aspect-[16/9] overflow-hidden relative group">
        <img
          src={car.image}
          alt={car.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
          <div className="flex items-center gap-2 text-white">
            <span className="text-xs">{car.topSpeed} km/h</span>
            <span className="h-1 w-1 rounded-full bg-white"></span>
            <span className="text-xs">{car.acceleration}s 0-100</span>
            <span className="h-1 w-1 rounded-full bg-white"></span>
            <span className="text-xs">{car.power} HP</span>
          </div>
        </div>
      </div>
      <CardContent className="flex-grow p-4 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-medium text-muted-foreground">{car.brand}</p>
            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
              {car.category}
            </span>
          </div>
          <h3 className="font-bold text-lg mb-2">{car.name}</h3>
        </div>
        <div className="flex items-center mt-2">
          <BadgeIndianRupee className="h-4 w-4 mr-1 text-primary" />
          <span className="font-semibold">{formatIndianPrice(car.price)}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Link to={`/car/${car.id}`} className="w-full">
          <Button variant="outline" className="w-full">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CarCard;
