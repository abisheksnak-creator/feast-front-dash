import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { useOrder, FoodItem } from "@/contexts/OrderContext";
import { useToast } from "@/hooks/use-toast";
import { Pizza, Coffee, Cookie, Sandwich, Filter } from "lucide-react";

const MENU_ITEMS: FoodItem[] = [
  // Snacks
  { id: 1, name: "Veg Samosa", category: "Snacks", price: 20, image: "🥟", description: "Crispy golden samosas" },
  { id: 2, name: "French Fries", category: "Snacks", price: 40, image: "🍟", description: "Crispy fries with ketchup" },
  { id: 3, name: "Spring Rolls", category: "Snacks", price: 50, image: "🌯", description: "Fresh vegetable rolls" },
  
  // Meals
  { id: 4, name: "Veg Burger", category: "Meals", price: 60, image: "🍔", description: "Delicious veg patty burger" },
  { id: 5, name: "Paneer Pizza", category: "Meals", price: 120, image: "🍕", description: "Cheesy paneer pizza" },
  { id: 6, name: "Pasta Alfredo", category: "Meals", price: 80, image: "🍝", description: "Creamy white sauce pasta" },
  { id: 7, name: "Veg Sandwich", category: "Meals", price: 50, image: "🥪", description: "Grilled veg sandwich" },
  
  // Beverages
  { id: 8, name: "Cold Coffee", category: "Beverages", price: 40, image: "☕", description: "Chilled coffee shake" },
  { id: 9, name: "Fresh Juice", category: "Beverages", price: 30, image: "🧃", description: "Freshly squeezed juice" },
  { id: 10, name: "Masala Chai", category: "Beverages", price: 15, image: "🍵", description: "Hot masala tea" },
  
  // Desserts
  { id: 11, name: "Ice Cream", category: "Desserts", price: 35, image: "🍦", description: "Creamy ice cream" },
  { id: 12, name: "Brownie", category: "Desserts", price: 45, image: "🍰", description: "Chocolate brownie" },
  { id: 13, name: "Gulab Jamun", category: "Desserts", price: 25, image: "🍡", description: "Sweet Indian dessert" },
];

const CATEGORIES = ["All", "Snacks", "Meals", "Beverages", "Desserts"];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { addToOrder } = useOrder();
  const { toast } = useToast();

  const filteredItems = selectedCategory === "All"
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === selectedCategory);

  const handleAddToOrder = (item: FoodItem) => {
    addToOrder(item);
    toast({
      title: "Added to Order!",
      description: `${item.name} has been added to your order.`,
    });
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Snacks": return <Sandwich className="w-4 h-4" />;
      case "Meals": return <Pizza className="w-4 h-4" />;
      case "Beverages": return <Coffee className="w-4 h-4" />;
      case "Desserts": return <Cookie className="w-4 h-4" />;
      default: return <Filter className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-warm bg-clip-text text-transparent">
            Our Menu
          </h1>
          <p className="text-xl text-muted-foreground">
            Choose from our delicious selection of food and beverages
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 animate-scale-in">
          {CATEGORIES.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={selectedCategory === category ? "bg-gradient-warm shadow-food" : ""}
              onClick={() => setSelectedCategory(category)}
            >
              {getCategoryIcon(category)}
              <span className="ml-2">{category}</span>
            </Button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <Card
              key={item.id}
              className="bg-gradient-card border-border hover:shadow-food transition-all duration-300 hover:-translate-y-2 overflow-hidden group animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="text-6xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  {item.image}
                </div>
                <h3 className="text-xl font-bold text-foreground">{item.name}</h3>
                <Badge variant="secondary" className="w-fit mx-auto mt-2">
                  {item.category}
                </Badge>
              </CardHeader>
              <CardContent className="text-center pb-2">
                <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                <p className="text-2xl font-bold text-primary">₹{item.price}</p>
              </CardContent>
              <CardFooter className="pt-4">
                <Button
                  className="w-full bg-gradient-warm hover:opacity-90"
                  onClick={() => handleAddToOrder(item)}
                >
                  Add to Order
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
