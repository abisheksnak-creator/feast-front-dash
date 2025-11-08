import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Calendar } from "lucide-react";

interface FoodAvailability {
  id: number;
  name: string;
  icon: string;
  available: boolean;
  time: string;
}

const DAILY_MENU: FoodAvailability[] = [
  { id: 1, name: "Veg Burger", icon: "🍔", available: true, time: "11:00 AM - 8:00 PM" },
  { id: 2, name: "Paneer Pizza", icon: "🍕", available: true, time: "12:00 PM - 9:00 PM" },
  { id: 3, name: "French Fries", icon: "🍟", available: true, time: "11:00 AM - 8:00 PM" },
  { id: 4, name: "Pasta Alfredo", icon: "🍝", available: false, time: "Currently Unavailable" },
  { id: 5, name: "Cold Coffee", icon: "☕", available: true, time: "8:00 AM - 8:00 PM" },
  { id: 6, name: "Fresh Juice", icon: "🧃", available: true, time: "8:00 AM - 6:00 PM" },
  { id: 7, name: "Samosa", icon: "🥟", available: true, time: "10:00 AM - 5:00 PM" },
  { id: 8, name: "Sandwich", icon: "🥪", available: false, time: "Currently Unavailable" },
  { id: 9, name: "Ice Cream", icon: "🍦", available: true, time: "12:00 PM - 9:00 PM" },
  { id: 10, name: "Brownie", icon: "🍰", available: true, time: "11:00 AM - 8:00 PM" },
];

const Availability = () => {
  const availableCount = DAILY_MENU.filter((item) => item.available).length;
  const unavailableCount = DAILY_MENU.length - availableCount;

  return (
    <div className="min-h-screen bg-gradient-subtle py-8">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-warm bg-clip-text text-transparent">
            Food Availability
          </h1>
          <p className="text-muted-foreground">Check what's available today</p>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Card className="bg-gradient-card border-border shadow-card animate-scale-in">
            <CardContent className="pt-6 text-center">
              <Calendar className="w-8 h-8 mx-auto mb-2 text-primary" />
              <p className="text-3xl font-bold text-foreground">{DAILY_MENU.length}</p>
              <p className="text-sm text-muted-foreground">Total Items</p>
            </CardContent>
          </Card>

          <Card className="bg-success/10 border-success animate-scale-in" style={{ animationDelay: "0.1s" }}>
            <CardContent className="pt-6 text-center">
              <CheckCircle className="w-8 h-8 mx-auto mb-2 text-success" />
              <p className="text-3xl font-bold text-success">{availableCount}</p>
              <p className="text-sm text-muted-foreground">Available</p>
            </CardContent>
          </Card>

          <Card className="bg-destructive/10 border-destructive animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <CardContent className="pt-6 text-center">
              <XCircle className="w-8 h-8 mx-auto mb-2 text-destructive" />
              <p className="text-3xl font-bold text-destructive">{unavailableCount}</p>
              <p className="text-sm text-muted-foreground">Out of Stock</p>
            </CardContent>
          </Card>
        </div>

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 gap-4">
          {DAILY_MENU.map((item, index) => (
            <Card
              key={item.id}
              className={`border-border transition-all duration-300 hover:shadow-card animate-scale-in ${
                item.available
                  ? "bg-card hover:border-success/50"
                  : "bg-muted/50 hover:border-destructive/50"
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`text-5xl ${!item.available && "grayscale opacity-50"}`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.time}</p>
                    </div>
                  </div>
                  <Badge
                    variant={item.available ? "default" : "destructive"}
                    className={item.available ? "bg-success" : ""}
                  >
                    {item.available ? (
                      <>
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Available
                      </>
                    ) : (
                      <>
                        <XCircle className="w-3 h-3 mr-1" />
                        Out of Stock
                      </>
                    )}
                  </Badge>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Update Notice */}
        <Card className="mt-8 bg-accent/20 border-accent animate-scale-in" style={{ animationDelay: "0.5s" }}>
          <CardContent className="py-6 text-center">
            <p className="text-sm text-muted-foreground">
              ℹ️ Availability updates every hour. Check back regularly for the latest status.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Availability;
