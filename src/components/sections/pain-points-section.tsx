import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Workflow, Sparkles, SmartphoneNfc } from 'lucide-react';
import type { FC } from 'react';

const painPoints = [
  {
    icon: <Workflow className="w-10 h-10 text-primary mb-4" />,
    title: 'Fragmented Shopping Journeys',
    description: "Tired of juggling multiple apps and websites? NORA unifies brand interactions into a single conversation, accessible wherever you are.",
  },
  {
    icon: <Sparkles className="w-10 h-10 text-primary mb-4" />,
    title: 'Impersonal & Inefficient Interactions',
    description: "NORA offers personalized assistance, remembering your preferences and providing smart suggestions. It's fast too – complete voice interactions and checkouts in under 5 minutes.",
  },
  {
    icon: <SmartphoneNfc className="w-10 h-10 text-primary mb-4" />,
    title: 'App Overload & Friction',
    description: "No more downloading new apps. NORA lives on platforms you already love, like WhatsApp and Messenger, offering a seamless, zero-friction experience.",
  },
];

const PainPointsSection: FC = () => {
  return (
    <section id="solutions" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <p className="text-xl font-medium text-muted-foreground mb-2 text-center">The Omni-Retail Challenge</p>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
            NORA Addresses Key <span className="text-primary">Pain Points</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Traditional retail struggles with fragmented experiences and app fatigue. NORA provides AI-powered solutions to overcome these hurdles, making shopping intuitive and efficient.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <Card key={index} className="bg-background shadow-lg hover:shadow-primary/20 transition-shadow duration-300 rounded-xl overflow-hidden flex flex-col">
              <CardHeader className="items-center text-center pt-8">
                {point.icon}
                <CardTitle className="font-headline text-2xl">{point.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center flex-grow pb-8">
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {point.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
