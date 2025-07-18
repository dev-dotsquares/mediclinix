'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from '@/components/ui/sheet';
import { VisuallyHidden } from '@/components/ui/visually-hidden';
import { Menu, X, CalendarPlus } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';
import Logo from '@/components/logo';

interface HeaderProps {
  onBookAppointment: () => void;
}

const NavLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <a
    href={href}
    onClick={onClick}
    className="text-base font-medium text-foreground/80 transition-colors hover:text-primary"
  >
    {children}
  </a>
);

export default function Header({ onBookAppointment }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-card/80 shadow-md backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <a href="#home" className="flex items-center gap-2">
          <Logo />
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button onClick={onBookAppointment} className="hidden sm:flex bg-accent hover:bg-accent/90 text-accent-foreground">
            <CalendarPlus className="mr-2 h-4 w-4" />
            Book an Appointment
          </Button>
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs bg-card p-0 flex flex-col">
                <SheetHeader className="p-6 pb-4 flex flex-row items-center justify-between">
                  <a href="#home" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                    <Logo />
                  </a>
                  <SheetTitle>
                      <VisuallyHidden>Mobile Menu</VisuallyHidden>
                  </SheetTitle>
                  <SheetTrigger asChild>
                      <Button variant="ghost" size="icon" className="-mr-2">
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                  </SheetTrigger>
                </SheetHeader>
                <div className="flex flex-col h-full p-6 pt-0">
                  <nav className="flex flex-col gap-6 text-lg">
                    {NAV_LINKS.map((link) => (
                      <NavLink key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
                        {link.label}
                      </NavLink>
                    ))}
                  </nav>
                  <Button onClick={() => { onBookAppointment(); setIsMobileMenuOpen(false); }} className="mt-auto bg-accent hover:bg-accent/90 text-accent-foreground">
                     <CalendarPlus className="mr-2 h-4 w-4" />
                    Book Appointment
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
