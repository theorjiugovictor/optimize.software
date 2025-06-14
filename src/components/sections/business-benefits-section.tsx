import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cpu, SearchCode, LineChart } from 'lucide-react';
import type { FC } from 'react';

const benefits = [
  {
    icon: <Cpu className="w-10 h-10 text-primary mb-4" />,
    title: 'Plug-and-Play AI Infrastructure',
    description: "Easily integrate NORA's advanced AI capabilities into your existing systems with minimal setup."
  },
  {
    icon: <SearchCode className="w-10 h-10 text-primary mb-4" />,
    title: 'Native Brand Discovery',
    description: "Enable customers to discover and interact with your brand organically within their favorite messaging apps."
  },
  {
    icon: <LineChart className="w-10 h-10 text-primary mb-4" />,
    title: 'Insights-Driven Operations',
    description: "Gain valuable customer insights and data analytics to optimize strategies and drive growth."
  },
];

const BusinessBenefitsSection: FC = () => {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
            Empowering Your <span className="text-primary">Brand</span> with NORA
          </h2>
           <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            NORA is more than a tool; it's a strategic partner for growth, offering tangible benefits to elevate your business.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-background shadow-lg hover:shadow-primary/20 transition-shadow duration-300 rounded-xl p-6 flex flex-col text-center items-center">
              {benefit.icon}
              <CardTitle className="font-headline text-2xl mb-3">{benefit.title}</CardTitle>
              <p className="text-muted-foreground text-base leading-relaxed">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessBenefitsSection;
