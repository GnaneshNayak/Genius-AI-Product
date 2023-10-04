'use client';
import { useAuth } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';
import TypewriterComponent from 'typewriter-effect';
import { Button } from './ui/button';
type Props = {};

const LandingHero = (props: Props) => {
  const { isSignedIn } = useAuth();
  return (
    <div className="text-white font-bold text-center py-6 space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold space-y-5">
        <h1>The best AI Tool for</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <TypewriterComponent
            options={{
              strings: [
                'Chatbot.',
                'Photo Generation.',
                'Code Generation.',
                'Music Generation.',
                'Video Generation.',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        Create content using AI 10x faster
      </div>
      <div>
        <Link href={isSignedIn ? '/dashboard' : '/sign-up'}>
          <Button
            variant="premium"
            className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
          >
            Start Generating For Free
          </Button>
        </Link>
      </div>
      <div className="text-zinc-400 text-xs md:text-xm font-normal">
        No credit card required.
      </div>
    </div>
  );
};

export default LandingHero;
