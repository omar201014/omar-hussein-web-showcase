import { useState } from 'react';
import { Menu, Home, Briefcase, FolderKanban, Code, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const navigationItems = [
  { name: 'Home', icon: Home, id: 'hero' },
  { name: 'Experience', icon: Briefcase, id: 'experience' },
  { name: 'Projects', icon: FolderKanban, id: 'projects' },
  { name: 'Skills', icon: Code, id: 'skills' },
  { name: 'Education', icon: GraduationCap, id: 'education' },
];

export const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setOpen(false);
    
    setTimeout(() => {
      if (sectionId === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 20;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }, 150);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden hover:bg-primary/10 hover:text-primary transition-all"
          aria-label="Open navigation menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[280px] border-l border-border/50 backdrop-blur-xl bg-background/95">
        <SheetHeader className="border-b border-border/30 pb-4">
          <SheetTitle className="text-xl font-bold text-primary text-left">
            Menu
          </SheetTitle>
        </SheetHeader>
        <nav className="mt-6 flex flex-col space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-primary/10 transition-all text-left group border border-transparent hover:border-primary/20"
              >
                <Icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-base font-medium text-foreground group-hover:text-primary transition-colors">
                  {item.name}
                </span>
              </button>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
