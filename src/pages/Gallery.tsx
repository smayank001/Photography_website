import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    "all",
    "wedding",
    "pre-wedding",
    "engagement",
    "birthday",
    "baby-shower",
    "mundan",
    "anniversary",
    "corporate",
    "product",
  ];

  const images = [
    {
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800",
      category: "wedding",
    },
    {
      url: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800",
      category: "pre-wedding",
    },
    {
      url: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800",
      category: "engagement",
    },
    {
      url: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800",
      category: "birthday",
    },
    {
      url: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800",
      category: "baby-shower",
    },
    {
      url: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800",
      category: "corporate",
    },
    {
      url: "https://images.unsplash.com/photo-1523380677598-64d85d015339?w=800",
      category: "product",
    },
    {
      url: "https://images.unsplash.com/photo-1525268771113-32d9e9021a97?w=800",
      category: "wedding",
    },
    {
      url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800",
      category: "pre-wedding",
    },
    {
      url: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800",
      category: "engagement",
    },
    {
      url: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800",
      category: "birthday",
    },
    {
      url: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800",
      category: "anniversary",
    },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
              Our <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of captured moments across various events
              and celebrations.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`capitalize ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border-primary text-primary hover:bg-primary/10"
                }`}
              >
                {category.replace("-", " ")}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <Card
                key={index}
                className="overflow-hidden cursor-pointer group hover-glow animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setSelectedImage(image.url)}
              >
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={image.url}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-primary font-semibold capitalize">
                      {image.category.replace("-", " ")}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Full size"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Gallery;
