
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <>
      <Header />
      <main>
        <section className="bg-secondary py-16">
          <div className="container text-center max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">About Elite Car Emporium</h1>
            <p className="text-lg text-muted-foreground">
              Elevating India's premium automobile experience since 2010.
            </p>
          </div>
        </section>
        
        <section className="container py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Elite Car Emporium was founded with a singular vision: to bring the world's most prestigious automobiles to discerning clients across India. What began as a boutique showroom in Mumbai has evolved into the nation's premier destination for luxury and performance vehicles.
              </p>
              <p className="text-muted-foreground">
                Our journey has been driven by passion, expertise, and an unwavering commitment to excellence. Today, we proudly represent the most coveted automotive brands, offering an unparalleled selection of sports cars, luxury sedans, and premium SUVs.
              </p>
            </div>
            <div className="aspect-video overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1578659258511-4a4e7dee7344?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" 
                alt="Luxury car showroom"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
        
        <section className="bg-secondary py-16">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8 text-center">Why Choose Elite Car Emporium</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-2">Curated Collection</h3>
                <p className="text-muted-foreground">
                  Our inventory is meticulously selected to represent the pinnacle of automotive engineering and design from around the world.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-2">Expert Guidance</h3>
                <p className="text-muted-foreground">
                  Our team of automotive specialists brings decades of industry knowledge to help you find the perfect vehicle for your lifestyle.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-2">White Glove Service</h3>
                <p className="text-muted-foreground">
                  From your first inquiry to delivery and beyond, experience a level of service that matches the caliber of our automobiles.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="container py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
            <p className="text-muted-foreground mb-8">
              At Elite Car Emporium, we believe that purchasing an exceptional vehicle should be an extraordinary experience. We are committed to providing personalized service, transparent transactions, and ongoing support to our valued clients.
            </p>
            <div className="bg-primary/10 p-8 rounded-lg">
              <blockquote className="text-lg italic text-muted-foreground">
                "Our mission is not simply to sell cars, but to connect passionate enthusiasts with the automotive masterpieces that inspire them."
              </blockquote>
              <p className="mt-4 font-medium">Raj Patel, Founder & CEO</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
