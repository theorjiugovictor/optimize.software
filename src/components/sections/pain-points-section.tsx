import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Boxes, UsersRound, Zap } from 'lucide-react';
import type { FC } from 'react';

const painPoints = [
  {
    icon: <Boxes className="w-10 h-10 text-primary mb-4" />,
    title: 'Inventory Management',
    description: 'Track and manage inventory across all sales channels seamlessly.',
  },
  {
    icon: <UsersRound className="w-10 h-10 text-primary mb-4" />,
    title: 'Customer Personalization',
    description: 'Leverage AI to tailor experiences, provide smart suggestions, and boost loyalty.',
  },
  {
    icon: <Zap className="w-10 h-10 text-primary mb-4" />,
    title: 'Operational Efficiency',
    description: 'Streamline operations, automate repetitive tasks, and reduce overhead.',
  },
];

const PainPointsSection: FC = () => {
  return (
    <section id="solutions" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
            NORA Addresses Key <span className="text-primary">Pain Points</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Omni-retailers face mounting challenges in today's dynamic market. NORA provides AI-powered solutions to overcome these hurdles and unlock new growth opportunities.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <Card key={index} className="bg-background shadow-lg hover:shadow-primary/20 transition-shadow duration-300 rounded-xl overflow-hidden flex flex-col">
              <CardHeader className="items-center text-center">
                {point.icon}
                <CardTitle className="font-headline text-2xl">{point.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center flex-grow">
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
