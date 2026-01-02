import {
  Store,
  FileText,
  Target,
  BarChart3,
  Package,
  Rocket,
} from "lucide-react";

const services = [
  {
    icon: Store,
    title: "Account Management",
    description:
      "Full-service management of your Amazon, Shopify, and eBay seller accounts to ensure smooth operations and compliance.",
  },
  {
    icon: FileText,
    title: "Product Listing Optimization",
    description:
      "SEO-driven listings with compelling copy, optimized keywords, and enhanced visuals to improve visibility and conversions.",
  },
  {
    icon: Target,
    title: "PPC & Advertising",
    description:
      "Strategic Amazon PPC and marketplace advertising campaigns designed to maximize ROI while minimizing ad spend waste.",
  },
  {
    icon: BarChart3,
    title: "Sales & Profitability Analysis",
    description:
      "Deep-dive analytics to identify revenue opportunities, reduce costs, and improve your bottom-line performance.",
  },
  {
    icon: Package,
    title: "Inventory Monitoring",
    description:
      "Proactive inventory management to prevent stockouts, reduce storage fees, and maintain optimal stock levels.",
  },
  {
    icon: Rocket,
    title: "Growth Strategy",
    description:
      "Customized scaling strategies to expand your market reach, launch new products, and accelerate business growth.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
              Services
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              How I Can Help Your Business
            </h2>
            <p className="text-muted-foreground">
              Comprehensive e-commerce consulting services tailored to drive
              measurable results across all major platforms.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-card p-6 rounded-lg border border-border shadow-card hover:shadow-card-hover transition-shadow duration-300"
              >
                <div className="p-3 bg-secondary rounded-md w-fit mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
