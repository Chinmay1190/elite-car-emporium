
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PaymentSuccess = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="container py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center bg-green-100 dark:bg-green-900 p-6 rounded-full mb-8">
            <Check className="h-12 w-12 text-green-600 dark:text-green-300" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Thank You for Your Purchase!</h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            Your payment has been successfully processed. We'll be in touch shortly with details about your purchase.
          </p>
          
          <div className="bg-secondary p-8 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-4">Order Confirmation</h2>
            <p className="text-muted-foreground mb-4">
              A confirmation email has been sent to your provided email address with all the order details.
            </p>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <div className="flex justify-between">
                <span>Order Number:</span>
                <span className="font-medium">{Math.random().toString(36).substring(2, 10).toUpperCase()}</span>
              </div>
              <div className="flex justify-between">
                <span>Date:</span>
                <span className="font-medium">{new Date().toLocaleDateString()}</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button variant="default">Return to Home</Button>
            </Link>
            <Link to="/catalog">
              <Button variant="outline">Continue Shopping</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PaymentSuccess;
