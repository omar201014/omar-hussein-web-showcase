
import { Copyright } from "lucide-react";
import { memo } from "react";

const Footer = memo(() => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-2 sm:px-4 bg-background/95 backdrop-blur-sm border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2 text-sm text-foreground/80">
            <Copyright className="h-4 w-4 text-primary" />
            <p className="text-foreground/90">{currentYear} All Copyrights Reserved. Omar Hussein</p>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-xs text-foreground/70">Crafted with passion</span>
            <div className="text-xs px-2 py-1 bg-primary/10 backdrop-blur-sm rounded-md border border-primary/20 hover:bg-primary/20 transition-colors duration-300 text-primary">
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
