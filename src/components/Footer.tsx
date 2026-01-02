import { MessageCircle, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-xl font-semibold mb-1">
              Govind Fulwariya
            </h3>
            <p className="text-sm text-footer-foreground/70">
              E-commerce Consultant
            </p>
            <p className="text-sm text-footer-foreground/60 mt-2">
              Amazon • Shopify • eBay
            </p>
          </div>

          {/* Contact Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://wa.me/919510986441?text=Hi%20Govind%2C%20looking%20to%20discuss%20e-commerce%20consulting."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-footer-foreground/70 hover:text-footer-foreground transition-colors"
            >
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </a>
            <a
              href="mailto:fulwariyagovind583@gmail.com?subject=E-commerce%20Consulting%20Inquiry&body=Hello%20Govind%2C%0A%0AI%20am%20interested%20in%20your%20e-commerce%20consulting%20services%20for%20Amazon%2C%20Shopify%2C%20or%20eBay.%0A%0AI%20would%20like%20to%20discuss%20my%20business%20requirements%20and%20next%20steps.%0A%0ARegards%2C%0A"
              className="flex items-center gap-2 text-sm text-footer-foreground/70 hover:text-footer-foreground transition-colors"
            >
              <Mail size={18} />
              <span>Gmail</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-footer-foreground/10 text-center">
          <p className="text-xs text-footer-foreground/50">
            © {new Date().getFullYear()} Govind Fulwariya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
