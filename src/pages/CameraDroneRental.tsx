import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Camera,
  Monitor,
  Lightbulb,
  Package,
  Aperture,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";

// Define types for our equipment data
interface Equipment {
  id: string;
  name: string;
  model: string;
  description: string;
  image?: string;
  icon: React.ReactNode;
  pricing: {
    "12 Hours": number;
    "24 Hours": number;
    "2 Days": number;
    "3 Days": number;
    "5 Days": number;
    "7 Days": number;
  };
  available: boolean;
  specifications: {
    sensor?: string;
    megapixels?: string;
    lensCompatibility?: string;
    batteryLife?: string;
    weight?: string;
    dimensions?: string;
    features?: string[];
  };
}

const CameraDroneRental = () => {
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(
    null
  );
  const [duration, setDuration] = useState<string>("24 Hours");
  const [pickupDate, setPickupDate] = useState<string>(
    format(new Date(), "yyyy-MM-dd")
  );

  // Sample equipment data
  const equipmentData: Equipment[] = [
    {
      id: "1",
      name: "DJI Mavic 3 Drone",
      model: "Mavic 3 Pro",
      description:
        "4K drone with gimbal stabilization for cinematic aerial shots",
      icon: <Package className="h-12 w-12 text-blue-500" />,
      pricing: {
        "12 Hours": 2500,
        "24 Hours": 3500,
        "2 Days": 5000,
        "3 Days": 6500,
        "5 Days": 9000,
        "7 Days": 12000,
      },
      available: true,
      specifications: {
        sensor: "1-inch CMOS",
        megapixels: "20MP",
        batteryLife: "46 minutes",
        weight: "895g",
        dimensions: "347×283×107.7 mm",
        features: [
          "Omnidirectional obstacle detection",
          "4K/60fps video",
          "APAS 5.0",
        ],
      },
    },
    {
      id: "2",
      name: "Sony Alpha 7M4",
      model: "ILCE-7M4",
      description: "Full-frame mirrorless camera with 33MP resolution",
      icon: <Camera className="h-12 w-12 text-red-500" />,
      pricing: {
        "12 Hours": 1500,
        "24 Hours": 2500,
        "2 Days": 4000,
        "3 Days": 5500,
        "5 Days": 8000,
        "7 Days": 10000,
      },
      available: true,
      specifications: {
        sensor: "Full-frame Exmor R CMOS",
        megapixels: "33MP",
        lensCompatibility: "E-mount lenses",
        batteryLife: "580 shots",
        weight: "658g",
        dimensions: "131.3×96.4×81.4 mm",
        features: [
          "Real-time Eye AF",
          "4K 60p video",
          "5-axis in-body stabilization",
        ],
      },
    },
    {
      id: "3",
      name: "Canon EOS 5D Mark IV",
      model: "EOS 5D Mark IV",
      description: "Professional DSLR with 30.4MP full-frame sensor",
      icon: <Aperture className="h-12 w-12 text-green-500" />,
      pricing: {
        "12 Hours": 1200,
        "24 Hours": 2000,
        "2 Days": 3500,
        "3 Days": 4800,
        "5 Days": 7000,
        "7 Days": 9000,
      },
      available: false,
      specifications: {
        sensor: "Full-frame CMOS",
        megapixels: "30.4MP",
        lensCompatibility: "EF/EF-S mount",
        batteryLife: "900 shots",
        weight: "800g",
        dimensions: "150.8×116.4×75.9 mm",
        features: [
          "Dual Pixel CMOS AF",
          "4K video recording",
          "Wi-Fi/NFC connectivity",
        ],
      },
    },
    {
      id: "4",
      name: "DJI Ronin-S Gimbal",
      model: "Ronin-S",
      description: "3-axis handheld gimbal for smooth camera movements",
      icon: <Monitor className="h-12 w-12 text-purple-500" />,
      pricing: {
        "12 Hours": 800,
        "24 Hours": 1200,
        "2 Days": 2000,
        "3 Days": 2500,
        "5 Days": 3500,
        "7 Days": 4500,
      },
      available: true,
      specifications: {
        sensor: "N/A",
        megapixels: "N/A",
        batteryLife: "12 hours",
        weight: "1025g",
        dimensions: "343×278×110 mm",
        features: ["Auto Tune Stability", "Sport Mode", "Motor Calibration"],
      },
    },
    {
      id: "5",
      name: "Manfrotto Befree Tripod",
      model: "MKBFRA4-BH",
      description: "Carbon fiber tripod with adjustable legs",
      icon: <Package className="h-12 w-12 text-yellow-500" />,
      pricing: {
        "12 Hours": 400,
        "24 Hours": 600,
        "2 Days": 1000,
        "3 Days": 1300,
        "5 Days": 1800,
        "7 Days": 2200,
      },
      available: true,
      specifications: {
        sensor: "N/A",
        megapixels: "N/A",
        weight: "410g",
        dimensions: "41.5×14.9×5.5 cm",
        features: [
          "Carbon fiber construction",
          "Adjustable leg angles",
          "Quick power lock",
        ],
      },
    },
    {
      id: "6",
      name: "Godox AD200Pro Lighting Kit",
      model: "AD200Pro",
      description: "Portable flash with 200Ws power and interchangeable heads",
      icon: <Lightbulb className="h-12 w-12 text-orange-500" />,
      pricing: {
        "12 Hours": 600,
        "24 Hours": 900,
        "2 Days": 1500,
        "3 Days": 2000,
        "5 Days": 2800,
        "7 Days": 3500,
      },
      available: true,
      specifications: {
        sensor: "N/A",
        megapixels: "N/A",
        batteryLife: "480 full power flashes",
        weight: "795g",
        dimensions: "135×135×245 mm",
        features: ["200Ws power", "Interchangeable heads", "TTL support"],
      },
    },
  ];

  const handleBookNow = (equipment: Equipment) => {
    const phoneNumber = "+919876543210"; // Replace with actual phone number
    const message = `Hello! I'd like to rent the following equipment:%0AEquipment: ${equipment.name}%0ADuration: ${duration}%0APickup Date: ${pickupDate}%0AMy Name: %3CUser_Name%3E%0AContact: %3CUser_Phone%3E%0ALocation: %3CCity%3E`;
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Banner */}
      <motion.div
        className="relative bg-gradient-to-r from-primary to-blue-600 text-white py-20 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto relative z-10 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Rent Premium Cameras, Drones & Gear
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            High-end professional equipment for your next shoot — available for
            rent on flexible durations.
          </motion.p>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-3"
            >
              Browse Equipment
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Equipment Listing Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            📸 Available Equipment
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {equipmentData.map((item) => (
              <motion.div key={item.id} variants={itemVariants}>
                <Card className="h-full flex flex-col">
                  <CardHeader className="flex flex-row items-center gap-4">
                    {item.icon}
                    <div>
                      <CardTitle className="text-xl">{item.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {item.model}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="mb-4">{item.description}</p>

                    <div className="mb-4">
                      <Label
                        htmlFor={`duration-${item.id}`}
                        className="mb-2 block"
                      >
                        Rental Duration
                      </Label>
                      <Select value={duration} onValueChange={setDuration}>
                        <SelectTrigger id={`duration-${item.id}`}>
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.entries(item.pricing).map(
                            ([period, price]) => (
                              <SelectItem key={period} value={period}>
                                {period} – ₹{price}
                              </SelectItem>
                            )
                          )}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <Calendar className="h-4 w-4" />
                      <input
                        type="date"
                        value={pickupDate}
                        onChange={(e) => setPickupDate(e.target.value)}
                        className="border rounded px-2 py-1 text-sm"
                      />
                    </div>

                    <Badge variant={item.available ? "default" : "destructive"}>
                      {item.available ? "Available" : "Booked"}
                    </Badge>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full"
                          onClick={() => setSelectedEquipment(item)}
                        >
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>
                            {selectedEquipment?.name} Details
                          </DialogTitle>
                        </DialogHeader>
                        {selectedEquipment && (
                          <div className="grid gap-4">
                            <div className="flex items-start gap-4">
                              <div className="mt-1">
                                {selectedEquipment.icon}
                              </div>
                              <div>
                                <h3 className="text-xl font-bold">
                                  {selectedEquipment.name}
                                </h3>
                                <p className="text-muted-foreground">
                                  {selectedEquipment.model}
                                </p>
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">
                                Description
                              </h4>
                              <p>{selectedEquipment.description}</p>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">
                                Technical Specifications
                              </h4>
                              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {selectedEquipment.specifications.sensor && (
                                  <li className="flex">
                                    <span className="font-medium mr-2">
                                      Sensor:
                                    </span>{" "}
                                    {selectedEquipment.specifications.sensor}
                                  </li>
                                )}
                                {selectedEquipment.specifications
                                  .megapixels && (
                                  <li className="flex">
                                    <span className="font-medium mr-2">
                                      Megapixels:
                                    </span>{" "}
                                    {
                                      selectedEquipment.specifications
                                        .megapixels
                                    }
                                  </li>
                                )}
                                {selectedEquipment.specifications
                                  .lensCompatibility && (
                                  <li className="flex">
                                    <span className="font-medium mr-2">
                                      Lens Compatibility:
                                    </span>{" "}
                                    {
                                      selectedEquipment.specifications
                                        .lensCompatibility
                                    }
                                  </li>
                                )}
                                {selectedEquipment.specifications
                                  .batteryLife && (
                                  <li className="flex">
                                    <span className="font-medium mr-2">
                                      Battery Life:
                                    </span>{" "}
                                    {
                                      selectedEquipment.specifications
                                        .batteryLife
                                    }
                                  </li>
                                )}
                                {selectedEquipment.specifications.weight && (
                                  <li className="flex">
                                    <span className="font-medium mr-2">
                                      Weight:
                                    </span>{" "}
                                    {selectedEquipment.specifications.weight}
                                  </li>
                                )}
                                {selectedEquipment.specifications
                                  .dimensions && (
                                  <li className="flex">
                                    <span className="font-medium mr-2">
                                      Dimensions:
                                    </span>{" "}
                                    {
                                      selectedEquipment.specifications
                                        .dimensions
                                    }
                                  </li>
                                )}
                              </ul>

                              {selectedEquipment.specifications.features && (
                                <div className="mt-2">
                                  <h5 className="font-medium mb-1">
                                    Features:
                                  </h5>
                                  <ul className="list-disc pl-5">
                                    {selectedEquipment.specifications.features.map(
                                      (feature, index) => (
                                        <li key={index}>{feature}</li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              )}
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">
                                Rental Conditions
                              </h4>
                              <ul className="list-disc pl-5 space-y-1">
                                <li>ID proof required for all rentals</li>
                                <li>
                                  Security deposit varies by item (typically
                                  ₹2000-₹10000)
                                </li>
                                <li>
                                  Late returns incur additional charges
                                  (₹500/day)
                                </li>
                                <li>
                                  Pickup from studio or delivery available (₹500
                                  delivery fee)
                                </li>
                                <li>
                                  Equipment must be returned in original
                                  condition
                                </li>
                                <li>
                                  Damage waiver insurance available for ₹300/day
                                </li>
                              </ul>
                            </div>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>

                    <Button
                      className="w-full"
                      disabled={!item.available}
                      onClick={() => handleBookNow(item)}
                    >
                      Book Now
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Rental Terms Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            💰 Rental Terms
          </motion.h2>

          <motion.div
            className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Rental Policies</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <strong>ID proof required</strong> for all rentals
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <strong>Security deposit</strong> varies by item
                      (typically ₹2000-₹10000)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <strong>Late return policy:</strong> ₹500/day additional
                      charge
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <strong>Pickup options:</strong> Studio pickup or delivery
                      (₹500 fee)
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Return Conditions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Equipment must be returned in{" "}
                      <strong>original condition</strong>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <strong>Damages:</strong> Full cost of repair/replacement
                      charged
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <strong>Loss:</strong> Full replacement value will be
                      charged
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <strong>Insurance option:</strong> Damage waiver for
                      ₹300/day
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CameraDroneRental;
