
import { Copyright } from "lucide-react";
import { memo } from "react";

const Footer = memo(() => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 bg-background border-t border-white/10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Copyright className="h-4 w-4 text-purple-400" />
            <p>{currentYear} All Copyrights Reserved. Omar Hussein</p>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground">Crafted with passion</span>
            <div className="text-xs px-2 py-1 bg-white/5 backdrop-blur-sm rounded-md border border-white/5 hover:bg-white/10 transition-colors duration-300 text-purple-300">
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
