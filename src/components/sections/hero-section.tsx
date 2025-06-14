import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { FC } from 'react';

const HeroSection: FC = () => {
  return (
    <section id="product" className="min-h-screen flex items-center pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-background to-card">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-square max-w-lg mx-auto md:mx-0 rounded-xl overflow-hidden shadow-2xl animate-fadeIn" data-ai-hint="abstract 3d">
          <Image
            src="https://placehold.co/600x600.png"
            alt="Abstract 3D Art for NORA"
            layout="fill"
            objectFit="cover"
            priority
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

// Add some basic animations to globals.css if not present
// @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
// .animate-fadeIn { animation: fadeIn 1s ease-out forwards; }
// @keyframes slideInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
// .animate-slideInUp { animation: slideInUp 0.8s ease-out forwards; animation-delay: 0.2s; }
