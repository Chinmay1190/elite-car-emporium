
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarCard from "@/components/CarCard";
import { cars } from "@/lib/cars";
import { BadgeIndianRupee } from "lucide-react";

const Index = () => {
  // Get featured cars (first 6 cars)
  const featuredCars = cars.slice(0, 6);
  
  // Get luxury and sports categories
  const luxuryCars = cars.filter(car => car.category === "Luxury").slice(0, 3);
  const sportsCars = cars.filter(car => car.category === "Sports").slice(0, 3);

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[80vh] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2669&q=80"
              alt="Luxury Car"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30" />
          </div>
          <div className="relative container h-full flex flex-col justify-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Experience Extraordinary Automotive Excellence
              </h1>
              <p className="text-lg text-white/80 mb-8">
                Discover India's premier collection of luxury and sports cars from the world's most prestigious manufacturers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/catalog">
                  <Button size="lg">Explore Collection</Button>
                </Link>
                <Link to="/categories">
                  <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                    View Categories
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Cars Section */}
        <section className="container py-16">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold">Featured Cars</h2>
              <p className="text-muted-foreground">
                Explore our handpicked selection of exceptional vehicles
              </p>
            </div>
            <Link to="/catalog" className="mt-4 md:mt-0">
              <Button variant="outline">View All</Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </section>

        {/* Categories Highlight */}
        <section className="bg-secondary py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Explore By Category</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Link 
                to="/catalog?category=Sports"
                className="group relative overflow-hidden rounded-lg aspect-[3/4]"
              >
                <img
                  src="https://images.unsplash.com/photo-1614200187524-dc4b892acf16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
                  alt="Sports Cars"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Sports Cars</h3>
                    <div className="flex items-center text-white/70">
                      <span>Explore</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
              <Link 
                to="/catalog?category=Luxury"
                className="group relative overflow-hidden rounded-lg aspect-[3/4]"
              >
                <img
                  src="https://images.unsplash.com/photo-1631295868223-63265b40d9e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
                  alt="Luxury Cars"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Luxury Cars</h3>
                    <div className="flex items-center text-white/70">
                      <span>Explore</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
              <Link 
                to="/catalog?category=SUV"
                className="group relative overflow-hidden rounded-lg aspect-[3/4]"
              >
                <img
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
                  alt="Luxury SUVs"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Luxury SUVs</h3>
                    <div className="flex items-center text-white/70">
                      <span>Explore</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
              <Link 
                to="/catalog?category=Electric"
                className="group relative overflow-hidden rounded-lg aspect-[3/4]"
              >
                <img
                  src="https://images.unsplash.com/photo-1617704548623-340376564e68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
                  alt="Electric Cars"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Electric Cars</h3>
                    <div className="flex items-center text-white/70">
                      <span>Explore</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Brands */}
        <section className="container py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Brands</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {["Rolls Royce", "Lamborghini", "Ferrari", "Bentley", "Aston Martin", "Bugatti"].map((brand) => (
              <div key={brand} className="flex flex-col items-center justify-center bg-secondary/50 rounded-lg p-6 hover:bg-secondary transition-colors">
                <span className="text-lg font-medium">{brand}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Car?</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Browse our extensive collection of luxury and sports cars and find the perfect match for your lifestyle.
            </p>
            <Link to="/catalog">
              <Button size="lg" variant="secondary">Explore All Cars</Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
