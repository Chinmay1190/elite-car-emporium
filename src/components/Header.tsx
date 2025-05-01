
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import { useCart } from "@/components/CartContext";
import { cn } from "@/lib/utils";
import { Menu, ShoppingBag, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold luxury-gradient bg-clip-text text-transparent">Elite Cars</span>
        </Link>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link to="/catalog" className="text-sm font-medium transition-colors hover:text-primary">
            Catalog
          </Link>
          <Link to="/categories" className="text-sm font-medium transition-colors hover:text-primary">
            Categories
          </Link>
          <Link to="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link to="/cart" className="relative">
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5" />
            </Button>
            {totalItems > 0 && (
              <Badge className="absolute -top-1 -right-1 px-1.5 py-0.5 bg-primary text-primary-foreground text-xs">
                {totalItems}
              </Badge>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-50 bg-background p-6 shadow-lg md:hidden transition-transform duration-200",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-6">
          <Link 
            to="/" 
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/catalog" 
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Catalog
          </Link>
          <Link 
            to="/categories" 
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Categories
          </Link>
          <Link 
            to="/about" 
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
