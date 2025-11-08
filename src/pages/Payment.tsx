import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CreditCard, Smartphone, Wallet, CheckCircle } from "lucide-react";
import { useOrder } from "@/contexts/OrderContext";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [showSuccess, setShowSuccess] = useState(false);
  const { getTotalPrice, clearOrder } = useOrder();
  const navigate = useNavigate();

  const totalPrice = getTotalPrice();

  const handlePayment = () => {
    setShowSuccess(true);
    setTimeout(() => {
      clearOrder();
      setShowSuccess(false);
      navigate("/");
    }, 3000);
  };

  if (totalPrice === 0) {
    return (
      <div className="min-h-screen bg-gradient-subtle flex items-center justify-center">
        <Card className="max-w-md w-full mx-4 text-center p-8">
          <div className="text-6xl mb-4">💳</div>
          <h2 className="text-2xl font-bold mb-4 text-foreground">No Order to Pay</h2>
          <p className="text-muted-foreground mb-6">
            Please add items to your order first!
          </p>
          <Button onClick={() => navigate("/menu")} className="bg-gradient-warm">
            Browse Menu
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-warm bg-clip-text text-transparent">
            Payment
          </h1>
          <p className="text-muted-foreground">Choose your payment method</p>
        </div>

        <Card className="bg-gradient-card border-border shadow-card mb-6 animate-scale-in">
          <CardHeader>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-foreground">Total Amount</h3>
              <p className="text-3xl font-bold text-primary">₹{totalPrice}</p>
            </div>
          </CardHeader>
        </Card>

        <Card className="bg-card border-border shadow-card animate-scale-in" style={{ animationDelay: "0.1s" }}>
          <CardHeader>
            <h3 className="text-xl font-bold text-foreground">Select Payment Method</h3>
          </CardHeader>
          <CardContent className="space-y-6">
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
              <div className="flex items-center space-x-3 p-4 rounded-lg border-2 border-border hover:border-primary transition-colors cursor-pointer">
                <RadioGroupItem value="card" id="card" />
                <Label htmlFor="card" className="flex items-center gap-3 flex-1 cursor-pointer">
                  <div className="w-10 h-10 bg-gradient-warm rounded-full flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Credit/Debit Card</p>
                    <p className="text-sm text-muted-foreground">Pay with your card</p>
                  </div>
                </Label>
              </div>

              <div className="flex items-center space-x-3 p-4 rounded-lg border-2 border-border hover:border-primary transition-colors cursor-pointer">
                <RadioGroupItem value="upi" id="upi" />
                <Label htmlFor="upi" className="flex items-center gap-3 flex-1 cursor-pointer">
                  <div className="w-10 h-10 bg-gradient-warm rounded-full flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">UPI</p>
                    <p className="text-sm text-muted-foreground">PhonePe, Google Pay, Paytm</p>
                  </div>
                </Label>
              </div>

              <div className="flex items-center space-x-3 p-4 rounded-lg border-2 border-border hover:border-primary transition-colors cursor-pointer">
                <RadioGroupItem value="cash" id="cash" />
                <Label htmlFor="cash" className="flex items-center gap-3 flex-1 cursor-pointer">
                  <div className="w-10 h-10 bg-gradient-warm rounded-full flex items-center justify-center">
                    <Wallet className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Cash on Counter</p>
                    <p className="text-sm text-muted-foreground">Pay at collection</p>
                  </div>
                </Label>
              </div>
            </RadioGroup>

            {paymentMethod === "card" && (
              <div className="space-y-4 animate-fade-in">
                <div>
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" type="password" maxLength={3} />
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === "upi" && (
              <div className="space-y-4 animate-fade-in">
                <div>
                  <Label htmlFor="upiId">UPI ID</Label>
                  <Input id="upiId" placeholder="yourname@upi" />
                </div>
              </div>
            )}

            <Button
              className="w-full bg-gradient-warm text-lg py-6 hover:opacity-90"
              onClick={handlePayment}
            >
              {paymentMethod === "cash" ? "Confirm Order" : "Pay Now"}
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Success Dialog */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="text-center">
          <DialogHeader>
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center animate-scale-in">
                <CheckCircle className="w-12 h-12 text-success-foreground" />
              </div>
            </div>
            <DialogTitle className="text-2xl">Payment Successful!</DialogTitle>
            <DialogDescription className="text-lg">
              Your order has been placed successfully. Thank you!
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Payment;
