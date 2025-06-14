import type { FC } from 'react';

const AboutSection: FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6">
          About <span className="text-primary">OptimizeHk</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          OptimizeHk is a pioneering startup transforming the omni-retail landscape with AI solutions. We are dedicated to empowering businesses to grow, innovate, and connect with customers in more meaningful ways. Our flagship product, NORA, embodies this mission by revolutionizing how consumers interact with brands.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
