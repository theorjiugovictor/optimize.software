import { Card, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import type { FC } from 'react';

const features = [
  {
    imageSrc: 'https://placehold.co/400x200.png',
    imageHint: 'abstract shapes',
    title: 'Unified Brand Access',
    description: 'Engage with multiple brands through a single, intelligent conversational interface.',
  },
  {
    imageSrc: 'https://placehold.co/400x200.png',
    imageHint: 'abstract orb',
    title: 'Personalized Assistance',
    description: 'Receive smart product suggestions, style advice, and enjoy voice interactions.',
  },
  {
    imageSrc: 'https://placehold.co/400x200.png',
    imageHint: 'abstract wave',
    title: 'Platform Integration',
    description: 'Seamlessly connect NORA with popular platforms like WhatsApp and Messenger.',
  },
];

const FeaturesSection: FC = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <p className="text-xl font-medium text-muted-foreground mb-2 text-center">NORA: The Intelligent Solution</p>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
            Key <span className="text-primary">Features</span> and Benefits
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how NORA's innovative features simplify shopping and enhance customer engagement.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group bg-card shadow-lg hover:shadow-primary/20 transition-all duration-300 rounded-xl flex flex-col items-start overflow-hidden">
              <div className="relative w-full h-40 md:h-48">
                <Image
                  src={feature.imageSrc}
                  alt={feature.title}
                  layout="fill"
                  objectFit="cover"
                  className="transform group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint={feature.imageHint}
                />
              </div>
              <div className="p-6">
                <CardTitle className="font-headline text-xl mb-2 group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
