import { MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Tagline */}
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
            Strategic E-commerce Partner
          </p>

          {/* Headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
            E-commerce Growth Consultant
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            Helping businesses grow across Amazon, Shopify, and eBay using
            data-driven strategies.
          </p>

          {/* Supporting line */}
          <p className="text-sm text-muted-foreground mb-10">
            Account management • Listings • Ads & PPC • Performance analysis •
            Growth strategy
          </p>

          {/* CTA Buttons */}
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
                  href="mailto:fulwariyagovind583@gmail.com?subject=E-commerce%20Consulting%20Inquiry&body=Hello%20Govind%2C%0A%0AI%20am%20interested%20in%20your%20e-commerce%20consulting%20services%20for%20Amazon%2C%20Shopify%2C%20or%20eBay.%0A%0AI%20would%20like%20to%20discuss%20my%20business%20requirements%20and%20next%20steps.%0A%0ARegards%2C%0A"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact via Gmail
                </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
