import { NavLink } from "@/components/NavLink";
import { Home, Menu, ShoppingBag, CreditCard, User, Calendar, Users } from "lucide-react";

const Navigation = () => {
  const navItems = [
    { to: "/", icon: Home, label: "Home" },
    { to: "/menu", icon: Menu, label: "Menu" },
    { to: "/order", icon: ShoppingBag, label: "Your Order" },
    { to: "/payment", icon: CreditCard, label: "Payment" },
    { to: "/details", icon: User, label: "My Details" },
    { to: "/availability", icon: Calendar, label: "Availability" },
    { to: "/customers", icon: Users, label: "Customers" },
  ];

  return (
    <nav className="bg-card shadow-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-warm rounded-full flex items-center justify-center">
              <span className="text-2xl">🍔</span>
            </div>
            <span className="text-xl font-bold bg-gradient-warm bg-clip-text text-transparent">
              Campus Cafe
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-secondary"
                activeClassName="bg-gradient-warm text-primary-foreground shadow-food"
              >
                <item.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{item.label}</span>
              </NavLink>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex overflow-x-auto space-x-1 py-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="flex flex-col items-center justify-center min-w-[60px] p-2 rounded-lg transition-all duration-300"
                activeClassName="bg-gradient-warm text-primary-foreground shadow-food"
              >
                <item.icon className="w-5 h-5" />
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
