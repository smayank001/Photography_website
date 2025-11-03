import { Link } from "react-router-dom";
import {
  Camera,
  Instagram,
  Facebook,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <Camera className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-xl font-serif font-bold text-primary">
                Capture Legacy
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              We don't just take pictures — we capture emotions that last
              forever.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4 text-primary">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "Gallery", "Services", "About", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4 text-primary">
              Services
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Wedding Photography</li>
              <li>Pre-Wedding Shoots</li>
              <li>Corporate Events</li>
              <li>Birthday Parties</li>
              <li>Product Photography</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4 text-primary">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <a
                  href="tel:+1234567890"
                  className="hover:text-primary transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href="mailto:info@capturelegacy.com"
                  className="hover:text-primary transition-colors"
                >
                  info@capturelegacy.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>
                  123 Photography Lane
                  <br />
                  Studio City, CA 90001
                </span>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Capture Legacy. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
