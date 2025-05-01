
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/components/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BadgeIndianRupee, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { toast } from "sonner";

const formatIndianPrice = (price: number): string => {
  const formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  });
  return formatter.format(price);
};

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.error("Your cart is empty");
      return;
    }
    
    navigate("/checkout");
  };

  return (
    <>
      <Header />
      <main className="container py-8">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="flex justify-center mb-4">
              <ShoppingBag className="h-16 w-16 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added any cars to your cart yet.
            </p>
            <Link to="/catalog">
              <Button>Browse Our Collection</Button>
            </Link>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto mb-8">
              <table className="w-full">
                <thead className="border-b">
                  <tr>
                    <th className="text-left py-4 px-2">Car</th>
                    <th className="text-left py-4 px-2">Color</th>
                    <th className="text-right py-4 px-2">Price</th>
                    <th className="text-center py-4 px-2">Quantity</th>
                    <th className="text-right py-4 px-2">Subtotal</th>
                    <th className="text-right py-4 px-2">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {cartItems.map((item) => (
                    <tr key={`${item.id}-${item.color}`}>
                      <td className="py-4 px-2">
                        <div className="flex items-center">
                          <div className="h-16 w-16 mr-4 overflow-hidden rounded">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-medium">{item.brand} {item.name}</h3>
                            <p className="text-sm text-muted-foreground">{item.category}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-2">
                        <span>{item.color}</span>
                      </td>
                      <td className="py-4 px-2 text-right">
                        <div className="flex items-center justify-end">
                          <BadgeIndianRupee className="h-3 w-3 mr-1" />
                          <span>{formatIndianPrice(item.price)}</span>
                        </div>
                      </td>
                      <td className="py-4 px-2">
                        <div className="flex items-center justify-center">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-10 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </td>
                      <td className="py-4 px-2 text-right font-medium">
                        <div className="flex items-center justify-end">
                          <BadgeIndianRupee className="h-3 w-3 mr-1" />
                          <span>{formatIndianPrice(item.price * item.quantity)}</span>
                        </div>
                      </td>
                      <td className="py-4 px-2 text-right">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-destructive"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div>
                <Button variant="outline" onClick={clearCart}>
                  Clear Cart
                </Button>
              </div>
              <div className="bg-secondary p-6 rounded-lg max-w-md w-full">
                <h3 className="font-semibold text-lg mb-4">Order Summary</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <div className="flex items-center">
                      <BadgeIndianRupee className="h-3 w-3 mr-1" />
                      <span>{formatIndianPrice(totalPrice)}</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tax</span>
                    <div className="flex items-center">
                      <BadgeIndianRupee className="h-3 w-3 mr-1" />
                      <span>{formatIndianPrice(totalPrice * 0.18)}</span>
                    </div>
                  </div>
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <div className="flex items-center">
                        <BadgeIndianRupee className="h-3 w-3 mr-1" />
                        <span>{formatIndianPrice(totalPrice * 1.18)}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <Button className="w-full" onClick={handleCheckout}>
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          </>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Cart;
