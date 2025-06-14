
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
            alt="NORA - AI Powered Omni-Retail Assistant"
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
            Remember how Web 2.0 and the internet changed online interactions, and Amazon redefined purchasing? NORA is here to transform our behavior again. This is more than a shopping assistant; it's a fundamental shift in how people discover, decide, and engage with brands throughout their digital lives. Meet NORA, your Next-Gen Omni Retail Assistant—an AI seamlessly integrated into WhatsApp, Messenger, and your browser. No new apps, no friction, just intelligent, effortless shopping.
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
