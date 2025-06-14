'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";

const Footer: FC = () => {
  const [currentYear, setCurrentYear] = useState<number | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    console.log('Email submitted:', email);
    // alert(`Thank you for contacting us, ${email}! We'll be in touch.`);
    toast({
      title: "Message Sent!",
      description: `Thank you for contacting us, ${email}! We'll be in touch soon.`,
    });
    event.currentTarget.reset();
  };

  return (
    <footer id="contact" className="py-16 md:py-20 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-8">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              className="flex-grow rounded-full bg-input border-border text-foreground placeholder-muted-foreground"
              required
              aria-label="Your Email for contact"
            />
            <Button type="submit" className="rounded-full px-8 py-3 text-base btn-primary-hover">
              Contact Us
            </Button>
          </form>
        </div>
        <div className="pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {currentYear !== null ? currentYear : new Date().getFullYear()} OptimizeHk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
