import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Camera, Award, Heart, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Camera,
      title: "Passion for Photography",
      description:
        "We live and breathe photography, treating every project as a unique opportunity to create art.",
    },
    {
      icon: Award,
      title: "Professional Excellence",
      description:
        "With over 10 years of experience, we deliver consistently outstanding results.",
    },
    {
      icon: Heart,
      title: "Emotional Connection",
      description:
        "We don't just capture images; we preserve emotions, memories, and stories.",
    },
    {
      icon: Zap,
      title: "Creative Innovation",
      description:
        "Using cutting-edge techniques and equipment to bring your vision to life.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
              About <span className="text-primary">Us</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Crafting timeless memories through the lens of passion and
              expertise.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-slide-in">
              <img
                src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800"
                alt="Photographer at work"
                className="rounded-lg luxury-shadow"
              />
            </div>
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl font-serif font-bold">
                Our <span className="text-primary">Story</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Capture Legacy was born from a deep love for storytelling
                through photography. What started as a passion project over a
                decade ago has grown into a premier photography service, trusted
                by hundreds of families and businesses.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe that every moment, no matter how small, deserves to
                be captured beautifully. Our team of skilled photographers
                combines technical expertise with artistic vision to create
                images that don't just document events—they tell stories that
                will be cherished for generations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From intimate family gatherings to grand celebrations, from
                corporate events to creative shoots, we approach each project
                with the same dedication: to capture the essence, emotion, and
                beauty of your special moments.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-serif font-bold text-center mb-12">
              What We <span className="text-primary">Stand For</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="p-6 text-center hover-glow animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-serif font-semibold mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Equipment Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in order-2 md:order-1">
              <h2 className="text-4xl font-serif font-bold">
                Professional <span className="text-primary">Equipment</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We use state-of-the-art photography equipment to ensure the
                highest quality results:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Professional full-frame DSLR and mirrorless cameras
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    High-quality prime and zoom lenses for every scenario
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Advanced lighting equipment for perfect illumination
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Professional drones for stunning aerial shots</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Gimbal stabilizers for smooth cinematic videos</span>
                </li>
              </ul>
            </div>
            <div className="animate-slide-in order-1 md:order-2">
              <img
                src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800"
                alt="Photography equipment"
                className="rounded-lg luxury-shadow"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
