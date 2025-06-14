
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { FC } from 'react';

const HeroSection: FC = () => {
  return (
    <section id="product" className="min-h-screen flex items-center pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-background to-card">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-video md:aspect-[4/3] max-w-xl mx-auto md:mx-0 rounded-xl overflow-hidden shadow-2xl animate-fadeIn">
          <Image
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjZjBhYzQ0Ii8+PC9zdmc+"
            alt="Generated 3D Abstract Shape and Geometry"
            layout="fill"
            objectFit="cover"
            priority
            className="rounded-xl"
          />
        </div>
        <div className="text-center md:text-left animate-slideInUp">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline mb-6 leading-tight">
            NORA: The Behavioral <span className="text-primary">Revolution</span> in Shopping
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            Experience the future of retail with NORA by OptimizeHk. Interact with your favorite brands seamlessly across platforms like WhatsApp and Messenger, all in one conversation.
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
