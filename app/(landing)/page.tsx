import LandingNavabar from '@/components/LandingNavabar';
import LandingContent from '@/components/landing-content';
import LandingHero from '@/components/landing-hero';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div className="h-full">
      <LandingNavabar />
      <LandingHero />
      <LandingContent />
    </div>
  );
};

export default LandingPage;
