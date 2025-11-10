
import { Copyright } from "lucide-react";
import { memo } from "react";

const Footer = memo(() => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 md:py-12 px-4 sm:px-6 md:px-8 bg-background/95 backdrop-blur-sm border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 to-transparent"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3 text-base text-foreground/80">
            <Copyright className="h-5 w-5 text-primary animate-pulse" />
            <p className="text-foreground/90 font-medium">{currentYear} All Copyrights Reserved. Omar Hussein</p>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-foreground/70">Crafted with passion & precision</span>
            <div className="text-sm px-3 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-lg border border-primary/30 hover:border-primary/50 hover:bg-primary/20 transition-all duration-300 text-primary font-medium shadow-lg hover:shadow-glow">
              Portfolio v1.0
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
