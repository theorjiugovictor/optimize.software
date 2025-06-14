import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRightLeft, UsersRound, Clock } from 'lucide-react';
import type { FC } from 'react';

const painPoints = [
  {
    icon: <ArrowRightLeft className="w-10 h-10 text-primary mb-4" />,
    title: 'Inventory Management',
    description: 'Track and manage inventory across all sales channels seamlessly.',
  },
  {
    icon: <UsersRound className="w-10 h-10 text-primary mb-4" />,
    title: 'Customer Personalization',
    description: 'Leverage AI to tailor experiences, provide smart suggestions, and boost loyalty.',
  },
  {
    icon: <Clock className="w-10 h-10 text-primary mb-4" />,
    title: 'Operational Efficiency',
    description: 'Streamline operations, automate repetitive tasks, and reduce overhead.',
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
            Omni-retailers face mounting challenges in today's dynamic market. NORA provides AI-powered solutions to overcome these hurdles and unlock new growth opportunities.
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
