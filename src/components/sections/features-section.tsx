
import { Card, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import type { FC } from 'react';

const features = [
  {
    imageSrc: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjZjBhYzQ0Ii8+PC9zdmc+',
    title: 'One AI, All Your Brands',
    description: "No more siloed chats or tabs. NORA unifies the shopping journey across fashion, tech, food, and more. E.g., 'Hey NORA, I need a pink sofa from IKEA and then compare TVs.'",
  },
  {
    imageSrc: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjYzg5MjM3Ii8+PC9zdmc+',
    title: 'Always-On, Always-Personal',
    description: 'She remembers your preferences, understands your needs, and helps you make better choices—every time. From first purchase to follow-up support, NORA sticks with you.',
  },
  {
    imageSrc: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjZjJiODUyIi8+PC9zdmc+',
    title: 'Seamless & Instant',
    description: 'NORA works inside platforms you already use—no app fatigue. Experience full voice interaction, smart suggestions, and frictionless checkout via Apple Pay, Google Pay, or Swish in under 5 minutes.',
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
            Explore how NORA's powerful capabilities simplify everyday commerce for users and create new opportunities for businesses.
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
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <CardTitle className="font-headline text-xl mb-2 group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                <CardDescription className="text-muted-foreground text-base leading-relaxed flex-grow">
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
