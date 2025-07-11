import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { FC } from 'react';

const CtaSection: FC = () => {
  return (
    <section id="get-started" className="py-20 md:py-32 bg-background text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline mb-6">
          Experience the Future with <span className="text-primary">NORA</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          NORA isn’t just a tool—it’s a behavioral revolution. For users, it’s the future of intuitive shopping. For brands, it’s plug-and-play AI infrastructure. Ready to join?
        </p>
        <Button asChild size="lg" className="rounded-full px-12 py-7 text-xl btn-primary-hover">
          <Link href="#contact">Get Started Now</Link>
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;
