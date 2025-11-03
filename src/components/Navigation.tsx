import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
    { name: "Services", path: "/services" },
    { name: "Rental", path: "/rental" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Camera className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
            <span className="text-2xl font-serif font-bold text-gradient">
              Capture Legacy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors relative group ${
                  isActive(item.path)
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${
                    isActive(item.path) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
            <ThemeToggle />
            <Link to="/booking">
              <Button className="luxury-shadow hover-glow">Book Now</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-4 text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? "text-primary bg-primary/10"
                    : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 pt-3">
              <Link to="/booking" onClick={() => setIsOpen(false)}>
                <Button className="w-full luxury-shadow">Book Now</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
