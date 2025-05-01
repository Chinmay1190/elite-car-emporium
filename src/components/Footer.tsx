
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className={cn("border-t bg-background", className)}>
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 luxury-gradient bg-clip-text text-transparent">Elite Cars</h3>
            <p className="text-sm text-muted-foreground">
              Experience luxury and performance with our exclusive collection of the world's most prestigious automobiles.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Catalog
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-muted-foreground hover:text-foreground transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/categories/sports" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sports Cars
                </Link>
              </li>
              <li>
                <Link to="/categories/luxury" className="text-muted-foreground hover:text-foreground transition-colors">
                  Luxury Cars
                </Link>
              </li>
              <li>
                <Link to="/categories/suv" className="text-muted-foreground hover:text-foreground transition-colors">
                  SUVs
                </Link>
              </li>
              <li>
                <Link to="/categories/electric" className="text-muted-foreground hover:text-foreground transition-colors">
                  Electric Cars
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Email: info@elitecars.com</li>
              <li className="text-muted-foreground">Phone: +91 9876543210</li>
              <li className="text-muted-foreground">Address: Luxury Lane, Mumbai 400001, India</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Elite Car Emporium. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
