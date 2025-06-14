import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { MessagesSquare, Bot, Link as LinkIcon } from 'lucide-react'; // Renamed Link to LinkIcon
import type { FC } from 'react';

const features = [
  {
    icon: <MessagesSquare className="w-8 h-8 text-primary" />,
    title: 'Unified Brand Access',
    description: 'Engage with multiple brands through a single, intelligent conversational interface.',
  },
  {
    icon: <Bot className="w-8 h-8 text-primary" />,
    title: 'Personalized Assistance',
    description: 'Receive smart product suggestions, style advice, and enjoy voice interactions.',
  },
  {
    icon: <LinkIcon className="w-8 h-8 text-primary" />, // Using LinkIcon
    title: 'Platform Integration',
    description: 'Seamlessly connect NORA with popular platforms like WhatsApp and Messenger.',
  },
];

const FeaturesSection: FC = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
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
            <Card key={index} className="bg-card shadow-lg hover:shadow-primary/20 transition-shadow duration-300 rounded-xl flex flex-col items-start p-6">
              <div className="flex items-center gap-4 mb-4">
                {feature.icon}
                <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
              </div>
              <CardDescription className="text-muted-foreground text-base leading-relaxed">
                {feature.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
