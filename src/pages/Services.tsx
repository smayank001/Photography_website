import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Wedding Photography",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=800",
      description:
        "Candid, cinematic, and traditional photography to capture your special day with elegance and emotion.",
      features: [
        "Full day coverage",
        "Candid moments",
        "Traditional poses",
        "Cinematic videos",
        "Edited photos",
        "Online gallery",
      ],
    },
    {
      title: "Pre-Wedding Shoots",
      image:
        "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800",
      description:
        "Romantic and cinematic couple photography in stunning locations, telling your unique love story.",
      features: [
        "Location scouting",
        "Creative concepts",
        "Outfit changes",
        "Drone shots",
        "Cinematic reels",
        "Premium editing",
      ],
    },
    {
      title: "Engagement Photography",
      image:
        "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800",
      description:
        "Capture the joy and excitement of your engagement with beautiful, timeless photographs.",
      features: [
        "2-3 hour session",
        "Multiple locations",
        "Natural & posed shots",
        "Quick turnaround",
        "High-res images",
        "Print-ready files",
      ],
    },
    {
      title: "Birthday Parties",
      image:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800",
      description:
        "Fun and vibrant photography to preserve the joy and laughter of birthday celebrations.",
      features: [
        "Candid moments",
        "Decorations & details",
        "Cake cutting",
        "Games & activities",
        "Group photos",
        "Same-day preview",
      ],
    },
    {
      title: "Baby Shower & Mundan",
      image:
        "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800",
      description:
        "Tender and heartwarming coverage of precious family milestones and ceremonies.",
      features: [
        "Family portraits",
        "Ceremony coverage",
        "Decor details",
        "Candid emotions",
        "Traditional moments",
        "Baby close-ups",
      ],
    },
    {
      title: "Anniversary Celebrations",
      image:
        "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800",
      description:
        "Celebrate your journey together with elegant photography that honors your love and commitment.",
      features: [
        "Couple portraits",
        "Party coverage",
        "Guest interactions",
        "Special moments",
        "Venue details",
        "Memory book",
      ],
    },
    {
      title: "Corporate Events",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800",
      description:
        "Professional coverage for conferences, seminars, team building, and corporate gatherings.",
      features: [
        "Event coverage",
        "Speaker shots",
        "Networking moments",
        "Branding focus",
        "Fast delivery",
        "Commercial rights",
      ],
    },
    {
      title: "Product Photography",
      image:
        "https://images.unsplash.com/photo-1523380677598-64d85d015339?w=800",
      description:
        "High-quality product photography for e-commerce, catalogs, and marketing materials.",
      features: [
        "Studio setup",
        "Multiple angles",
        "White background",
        "Lifestyle shots",
        "Detail focus",
        "Quick turnaround",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional photography services tailored for every special
              occasion in your life. For bookings, call us at{" "}
              <a
                href="tel:+918076911984"
                className="text-primary hover:underline"
              >
                +91 80769 11984
              </a>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover-glow animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                  <h3 className="absolute bottom-6 left-6 text-3xl font-serif font-bold text-foreground">
                    {service.title}
                  </h3>
                </div>

                <div className="p-6">
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link to="/booking">
                    <Button className="w-full hover-glow bg-primary text-primary-foreground hover:bg-primary/90">
                      Book This Service
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
