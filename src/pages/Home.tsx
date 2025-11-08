import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Utensils, Clock, Star } from "lucide-react";
import cafeteriaBg from "@/assets/cafeteria-bg.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[600px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url(${cafeteriaBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Welcome to <span className="text-primary">Campus Cafe</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Delicious meals, quick service, and the best college dining experience!
          </p>
          <Link to="/menu">
            <Button
              size="lg"
              className="bg-gradient-warm text-lg px-8 py-6 animate-glow hover:scale-105 transition-transform"
            >
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-food transition-all duration-300 hover:-translate-y-2 animate-scale-in">
              <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mb-4">
                <Utensils className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Fresh & Tasty</h3>
              <p className="text-muted-foreground">
                Every dish is prepared fresh daily with quality ingredients and love.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-food transition-all duration-300 hover:-translate-y-2 animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Quick Service</h3>
              <p className="text-muted-foreground">
                Fast ordering and preparation so you never miss your next class.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-food transition-all duration-300 hover:-translate-y-2 animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mb-4">
                <Star className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Student Favorites</h3>
              <p className="text-muted-foreground">
                Affordable prices and portions perfect for hungry students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Order?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Browse our menu and place your order in just a few clicks!
          </p>
          <Link to="/menu">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 hover:scale-105 transition-transform"
            >
              View Menu <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
