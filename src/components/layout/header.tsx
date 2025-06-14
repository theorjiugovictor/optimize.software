import Link from 'next/link';
import Logo from '@/components/ui/logo';
import { Button } from '@/components/ui/button';
import type { FC } from 'react';

const navItems = [
  { name: 'Product', href: '#product' }, // Assuming same-page links for now
  { name: 'Solutions', href: '#solutions' },
  { name: 'Resources', href: '#resources' },
  { name: 'Pricing', href: '#pricing' },
];

const Header: FC = () => {
  return (
    <header className="py-6 fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo />
        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <Button asChild className="rounded-full px-6 btn-primary-hover">
          <Link href="#get-started">Get Started</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
