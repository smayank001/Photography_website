import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Camera, Heart, Star, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Home = () => {
  const services = [
    {
      title: "Wedding Photography",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
      description: "Capture every magical moment of your special day",
    },
    {
      title: "Pre-Wedding Shoots",
      image:
        "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&h=600&fit=crop",
      description: "Romantic and cinematic couple photography",
    },
    {
      title: "Corporate Events",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
      description: "Professional coverage for your business events",
    },
  ];

  const stats = [
    { icon: Camera, value: "500+", label: "Events Covered" },
    { icon: Heart, value: "1000+", label: "Happy Clients" },
    { icon: Star, value: "5.0", label: "Average Rating" },
    { icon: Users, value: "10+", label: "Years Experience" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1920&h=1080&fit=crop)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            We Don't Just Take Pictures
            <span className="block text-primary mt-2">
              We Capture Emotions That Last Forever
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Professional photography services for weddings, events, and every
            special moment in your life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/gallery">
              <Button
                size="lg"
                className="luxury-shadow hover-glow text-lg px-8 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                View Our Work
              </Button>
            </Link>
            <Link to="/booking">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Book an Event
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From intimate moments to grand celebrations, we specialize in
              capturing the essence of every occasion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden group cursor-pointer hover-glow animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" variant="outline" className="hover-glow">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Ready to Capture Your{" "}
              <span className="text-primary">Special Moments?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's create timeless memories together. Book your photography
              session today.
            </p>
            <Link to="/booking">
              <Button
                size="lg"
                className="luxury-shadow hover-glow text-lg px-10 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
