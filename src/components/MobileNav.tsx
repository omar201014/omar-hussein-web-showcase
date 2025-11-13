import { useState } from 'react';
import { Menu, X, Home, Briefcase, FolderKanban, Code, GraduationCap } from 'lucide-react';
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
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }, 100);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-foreground hover:bg-primary/10"
          aria-label="Open navigation menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="text-left text-xl font-bold text-primary">
            Navigation
          </SheetTitle>
        </SheetHeader>
        <nav className="mt-8 flex flex-col space-y-3">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="flex items-center space-x-4 px-4 py-3 rounded-lg hover:bg-primary/10 transition-colors text-left group"
            >
              <item.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-base font-medium text-foreground group-hover:text-primary transition-colors">
                {item.name}
              </span>
            </button>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
