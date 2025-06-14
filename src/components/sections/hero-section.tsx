
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { FC } from 'react';

const HeroSection: FC = () => {
  return (
    <section id="product" className="min-h-screen flex items-center pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-background to-card">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-square max-w-lg mx-auto md:mx-0 rounded-xl overflow-hidden shadow-2xl animate-fadeIn">
          <Image
            src="https://placehold.co/600x600.png"
            alt="NORA: NextGen Omni-Retail Assistant providing seamless, intelligent shopping experiences"
            layout="fill"
            objectFit="cover"
            priority
            data-ai-hint="abstract 3d"
            className="rounded-xl"
          />
        </div>
        <div className="text-center md:text-left animate-slideInUp">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline mb-6 leading-tight">
            NORA: NextGen<span className="text-primary">Omni-Retail</span> Assistant
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            NORA is a revolutionary AI changing how we interact, discover, and decide. Seamlessly integrated into the platforms you already use, like WhatsApp and Messenger. Experience intelligent shopping without new apps or friction.
          </p>
          <Button asChild size="lg" className="rounded-full px-10 py-6 text-lg btn-primary-hover">
            <Link href="#get-started">Get Started</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

