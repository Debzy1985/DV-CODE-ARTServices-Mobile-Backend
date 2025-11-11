import { TowRequestForm } from "@/components/TowRequestForm";
import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Clock, Shield, Phone } from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: Truck,
      title: "Recovery Service",
      description: "Professional vehicle recovery services",
      price: "From £150"
    },
    {
      icon: Clock,
      title: "24/7 Emergency",
      description: "Round-the-clock emergency assistance",
      price: "Available 24/7"
    },
    {
      icon: Shield,
      title: "Roadside Assistance",
      description: "Jump start, tire change, fuel delivery",
      price: "From £50"
    },
    {
      icon: Phone,
      title: "Quick Response",
      description: "Fast response time guaranteed",
      price: "Under 30 mins"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            ART Services
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Professional Recovery & Roadside Assistance
          </p>

          <p className="text-lg opacity-90">
            Fast, reliable, and professional automotive rescue services across United Kingdom
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-2">{service.description}</p>
                    <p className="font-semibold text-blue-600">{service.price}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Request Form */}
          <div className="flex justify-center">
            <TowRequestForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 ART Services. All rights reserved.</p>
          <p className="mt-2">Emergency Hotline: 0800 278 4357 (0800 ART HELP) | Emergency: 999</p>

        </div>
      </footer>
    </div>
  );
};

export default Index;