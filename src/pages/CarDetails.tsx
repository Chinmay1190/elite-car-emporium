
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { cars } from "@/lib/cars";
import { Button } from "@/components/ui/button";
import { BadgeIndianRupee, ArrowLeft, Check } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCart } from "@/components/CartContext";
import { toast } from "sonner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const formatIndianPrice = (price: number): string => {
  const formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  });
  return formatter.format(price);
};

const CarDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const car = cars.find((c) => c.id === id);
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState(car?.colors[0] || "");
  const [quantity, setQuantity] = useState(1);

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Car Not Found</h2>
          <Button onClick={() => navigate("/catalog")}>Back to Catalog</Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (car && selectedColor) {
      addToCart({
        ...car,
        quantity,
        color: selectedColor,
      });
    }
  };

  return (
    <>
      <Header />
      <main className="container py-8">
        <Button
          variant="ghost"
          size="sm"
          className="mb-6 flex items-center"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
            <img
              src={car.image}
              alt={car.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                {car.category}
              </span>
              <span className="text-sm text-muted-foreground">{car.brand}</span>
            </div>
            
            <h1 className="text-3xl font-bold mb-4">{car.name}</h1>
            
            <div className="flex items-center mb-6">
              <BadgeIndianRupee className="h-5 w-5 mr-1 text-primary" />
              <span className="text-2xl font-bold">{formatIndianPrice(car.price)}</span>
            </div>
            
            <p className="text-muted-foreground mb-6">{car.description}</p>
            
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-2">Key Specifications</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="p-3 bg-secondary rounded-lg">
                  <p className="text-xs text-muted-foreground">Top Speed</p>
                  <p className="font-medium">{car.topSpeed} km/h</p>
                </div>
                <div className="p-3 bg-secondary rounded-lg">
                  <p className="text-xs text-muted-foreground">0-100 km/h</p>
                  <p className="font-medium">{car.acceleration}s</p>
                </div>
                <div className="p-3 bg-secondary rounded-lg">
                  <p className="text-xs text-muted-foreground">Power</p>
                  <p className="font-medium">{car.power} HP</p>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-2">Select Color</h3>
              <div className="flex flex-wrap gap-3">
                {car.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className="relative w-12 h-12 rounded-full border-2 transition-all"
                    style={{
                      borderColor: selectedColor === color ? "hsl(var(--primary))" : "transparent",
                      backgroundColor: color.toLowerCase(),
                    }}
                    aria-label={color}
                  >
                    {selectedColor === color && (
                      <Check className="absolute inset-0 m-auto text-white h-5 w-5" />
                    )}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-2">Quantity</h3>
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  -
                </Button>
                <span className="w-10 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </div>
            </div>
            
            <Button 
              className="w-full mb-4" 
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </div>
        </div>

        <Tabs defaultValue="features" className="mt-12">
          <TabsList className="mb-6">
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
          </TabsList>
          <TabsContent value="features" className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">Key Features</h2>
            <ul className="grid md:grid-cols-2 gap-2">
              {car.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="specifications">
            <h2 className="text-xl font-semibold mb-4">Detailed Specifications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-2">Performance</h3>
                <ul className="space-y-2">
                  <li className="flex items-center justify-between border-b pb-2">
                    <span className="text-muted-foreground">Top Speed</span>
                    <span className="font-medium">{car.topSpeed} km/h</span>
                  </li>
                  <li className="flex items-center justify-between border-b pb-2">
                    <span className="text-muted-foreground">Acceleration (0-100 km/h)</span>
                    <span className="font-medium">{car.acceleration}s</span>
                  </li>
                  <li className="flex items-center justify-between border-b pb-2">
                    <span className="text-muted-foreground">Power</span>
                    <span className="font-medium">{car.power} HP</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">General</h3>
                <ul className="space-y-2">
                  <li className="flex items-center justify-between border-b pb-2">
                    <span className="text-muted-foreground">Brand</span>
                    <span className="font-medium">{car.brand}</span>
                  </li>
                  <li className="flex items-center justify-between border-b pb-2">
                    <span className="text-muted-foreground">Category</span>
                    <span className="font-medium">{car.category}</span>
                  </li>
                  <li className="flex items-center justify-between border-b pb-2">
                    <span className="text-muted-foreground">Available Colors</span>
                    <span className="font-medium">{car.colors.join(", ")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </>
  );
};

export default CarDetails;
