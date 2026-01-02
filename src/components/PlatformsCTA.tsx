import { MessageCircle, Mail, ShoppingBag, Store, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const platforms = [
  {
    name: "Amazon",
    icon: ShoppingBag,
    description: "Seller Central expertise, FBA management, and PPC optimization",
  },
  {
    name: "Shopify",
    icon: Store,
    description: "Store setup, theme optimization, and conversion tracking",
  },
  {
    name: "eBay",
    icon: Tag,
    description: "Listing optimization, pricing strategy, and sales growth",
  },
];

const PlatformsCTA = () => {
  return (
    <section id="platforms" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Platforms */}
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
              Platforms
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-8">
              Expertise Across Major Marketplaces
            </h2>

            <div className="grid sm:grid-cols-3 gap-6">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-lg border border-border shadow-card text-center"
                >
                  <div className="p-3 bg-secondary rounded-full w-fit mx-auto mb-4">
                    <platform.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    {platform.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {platform.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div
            id="contact"
            className="mt-16 text-center bg-card p-8 md:p-12 rounded-xl border border-border shadow-card"
          >
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Ready to Scale Your E-commerce Business?
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Looking to scale your e-commerce business with clarity, confidence,
              and data-driven decisions? Let's discuss how I can help.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="min-w-[200px]">
                <a
                  href="https://wa.me/919510986441?text=Hi%20Govind%2C%20looking%20to%20discuss%20e-commerce%20consulting."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="min-w-[200px]">
                  <a
                    href="mailto:fulwariyagov@gmail.com?subject=Ecommerce%20Consulting%20Inquiry&body=Hello%20Govind%2C%0A%0AI%20would%20like%20to%20discuss%20e-commerce%20consulting."
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Contact via Gmail
                  </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformsCTA;
