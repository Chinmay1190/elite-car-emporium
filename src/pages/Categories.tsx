
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Categories = () => {
  const categories = [
    {
      id: "sports",
      name: "Sports Cars",
      description: "Experience unmatched performance and precision with our collection of high-performance sports cars.",
      image: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    },
    {
      id: "luxury",
      name: "Luxury Cars",
      description: "Indulge in unparalleled comfort and sophistication with our exclusive luxury car collection.",
      image: "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    },
    {
      id: "suv",
      name: "Luxury SUVs",
      description: "Combine versatility with luxury in our selection of premium SUVs for any terrain and lifestyle.",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    },
    {
      id: "electric",
      name: "Electric Cars",
      description: "Embrace the future with our cutting-edge electric vehicles combining sustainability with performance.",
      image: "https://images.unsplash.com/photo-1617704548623-340376564e68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    },
    {
      id: "sedan",
      name: "Luxury Sedans",
      description: "Experience the perfect blend of comfort, style, and performance in our premium sedan collection.",
      image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    }
  ];

  return (
    <>
      <Header />
      <main className="container py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Explore Our Categories</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our curated collections of exclusive automobiles, from high-performance sports cars to luxurious SUVs and eco-friendly electric vehicles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card 
              key={category.id} 
              className="overflow-hidden transition-all hover:shadow-lg h-full flex flex-col"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="flex flex-col flex-grow p-6">
                <h2 className="text-xl font-bold mb-2">{category.name}</h2>
                <p className="text-muted-foreground mb-6 flex-grow">{category.description}</p>
                <Link to={`/catalog?category=${category.id}`}>
                  <Button variant="outline" className="w-full">
                    Explore {category.name}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Categories;
