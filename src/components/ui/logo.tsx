import type { FC } from 'react';
import Link from 'next/link';

interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <Link href="/" className={`text-2xl font-bold font-headline text-primary ${className}`}>
      OptimizeHk
    </Link>
  );
};

export default Logo;
