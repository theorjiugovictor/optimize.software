'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import type { FC } from 'react';
import Logo from '@/components/ui/logo';
import { useState, useEffect } from 'react';

const Footer: FC = () => {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  // Basic form submission handler for demonstration
  // In a real app, this would involve a server action or API call
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    // For now, just log it. You'd typically send this to a backend.
    console.log('Email submitted:', email);
    // Add toast notification if needed, e.g., using useToast()
    alert(`Thank you for contacting us, ${email}! We'll be in touch.`);
    event.currentTarget.reset(); // Reset form after submission
  };


  return (
    <footer id="contact" className="py-12 md:py-16 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 items-center">
          <div className="lg:col-span-1">
             <Logo className="mb-4 text-3xl" />
             <p className="text-muted-foreground text-sm">
               Transforming retail with intelligent AI solutions.
             </p>
          </div>
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold font-headline mb-4 text-primary">Stay Updated</h3>
            <p className="text-muted-foreground mb-4">
              Get the latest news and updates about NORA and OptimizeHk.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
              <Input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="flex-grow rounded-full"
                required
                aria-label="Email address for contact"
              />
              <Button type="submit" className="rounded-full px-6 btn-primary-hover">
                Contact Us
              </Button>
            </form>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {currentYear !== null ? currentYear : new Date().getFullYear()} OptimizeHk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
