import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 8076911984",
      link: "tel:+918076911984",
      description: "Mon-Sat, 9AM-8PM",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Quick Response",
      link: "https://wa.me/918076911984",
      description: "Chat with us instantly",
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@capturelegacy.com",
      link: "mailto:info@capturelegacy.com",
      description: "We'll respond within 24hrs",
    },
    {
      icon: MapPin,
      title: "Studio Location",
      value: "123 Photography Lane",
      description: "Studio City, CA 90001",
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://instagram.com",
      handle: "@capturelegacy",
    },
    {
      icon: Facebook,
      name: "Facebook",
      url: "https://facebook.com",
      handle: "Capture Legacy",
    },
    {
      icon: Youtube,
      name: "YouTube",
      url: "https://youtube.com",
      handle: "Capture Legacy",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions about our services? Ready to book your photography
              session? We'd love to hear from you!
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="p-6 text-center hover-glow animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <method.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                {method.link ? (
                  <a
                    href={method.link}
                    className="text-primary hover:underline block mb-1"
                    target={
                      method.link.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      method.link.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {method.value}
                  </a>
                ) : (
                  <p className="text-foreground mb-1">{method.value}</p>
                )}
                <p className="text-sm text-muted-foreground">
                  {method.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Map Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-serif font-bold mb-6">
                Visit Our <span className="text-primary">Studio</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Come visit our state-of-the-art photography studio. We offer
                consultations, portfolio viewings, and can discuss your project
                in detail. Appointments are recommended but walk-ins are always
                welcome!
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Studio Hours:</h3>
                  <p className="text-muted-foreground">
                    Monday - Saturday: 9:00 AM - 8:00 PM
                  </p>
                  <p className="text-muted-foreground">
                    Sunday: By Appointment Only
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Address:</h3>
                  <p className="text-muted-foreground">123 Photography Lane</p>
                  <p className="text-muted-foreground">Studio City, CA 90001</p>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <div className="aspect-video rounded-lg overflow-hidden luxury-shadow">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.3858551332783!2d-118.39543!3d34.148201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDA4JzUzLjUiTiAxMTjCsDIzJzQzLjUiVw!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Studio Location"
                />
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">
              Follow Our <span className="text-primary">Journey</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Stay updated with our latest work, behind-the-scenes content, and
              photography tips on social media.
            </p>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="p-6 hover-glow transition-all">
                    <social.icon className="h-12 w-12 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <p className="font-semibold mb-1">{social.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {social.handle}
                    </p>
                  </Card>
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <Card className="p-12 luxury-shadow animate-fade-up">
              <h2 className="text-3xl font-serif font-bold mb-4">
                Ready to Book Your Session?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Let's create something beautiful together. Contact us today to
                discuss your photography needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/918076911984"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="hover-glow luxury-shadow bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Message on WhatsApp
                  </Button>
                </a>
                <a href="tel:+918076911984">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Us Now
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
