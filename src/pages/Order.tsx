import { useOrder } from "@/contexts/OrderContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Minus, Plus, Trash2, ShoppingBag, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Order = () => {
  const { orderItems, updateQuantity, removeFromOrder, getTotalPrice } = useOrder();
  const [animateTotal, setAnimateTotal] = useState(false);

  const totalPrice = getTotalPrice();

  useEffect(() => {
    setAnimateTotal(true);
    const timer = setTimeout(() => setAnimateTotal(false), 300);
    return () => clearTimeout(timer);
  }, [totalPrice]);

  const comboSuggestions = [
    { items: ["Veg Burger", "French Fries", "Cold Coffee"], discount: 20 },
    { items: ["Pizza", "Ice Cream"], discount: 15 },
  ];

  if (orderItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-subtle flex items-center justify-center">
        <Card className="max-w-md w-full mx-4 text-center p-8 animate-scale-in">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-2xl font-bold mb-4 text-foreground">Your Order is Empty</h2>
          <p className="text-muted-foreground mb-6">
            Start adding delicious items from our menu!
          </p>
          <Link to="/menu">
            <Button className="bg-gradient-warm">
              <ShoppingBag className="mr-2 w-4 h-4" />
              Browse Menu
            </Button>
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-warm bg-clip-text text-transparent">
            Your Order
          </h1>
          <p className="text-muted-foreground">Review and modify your items</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Order Items */}
          <div className="lg:col-span-2 space-y-4">
            {orderItems.map((item, index) => (
              <Card
                key={item.id}
                className="bg-card border-border hover:shadow-card transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{item.image}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-foreground">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                      <p className="text-primary font-bold mt-1">₹{item.price}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="h-8 w-8"
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <Input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 0)}
                        className="w-16 text-center"
                      />
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="h-8 w-8"
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="destructive"
                        onClick={() => removeFromOrder(item.id)}
                        className="h-8 w-8 ml-2"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="space-y-4">
            <Card className="bg-gradient-card border-border shadow-card sticky top-20 animate-scale-in">
              <CardHeader>
                <h3 className="text-xl font-bold text-foreground">Order Summary</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {orderItems.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {item.name} × {item.quantity}
                      </span>
                      <span className="font-medium">₹{item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-foreground">Total</span>
                    <span
                      className={`text-2xl font-bold text-primary ${
                        animateTotal ? "animate-counter" : ""
                      }`}
                    >
                      ₹{totalPrice}
                    </span>
                  </div>
                </div>
                <Link to="/payment">
                  <Button className="w-full bg-gradient-warm text-lg py-6">
                    Proceed to Payment
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Combo Suggestions */}
            <Card className="bg-accent/20 border-accent animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-accent" />
                  <h3 className="font-bold text-foreground">Combo Deals</h3>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {comboSuggestions.map((combo, index) => (
                  <div key={index} className="text-sm">
                    <Badge variant="secondary" className="mb-2">
                      Save ₹{combo.discount}
                    </Badge>
                    <p className="text-muted-foreground">{combo.items.join(" + ")}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
