'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

type Props = {};

const testimonials = [
  {
    name: 'Bilva',
    avatar: 'A',
    title: 'Software Engineer',
    description:
      "This website's AI personalization feels like it's reading my mind, making it my go-to for all things online.",
  },
  {
    name: 'Prajwal',
    avatar: 'A',
    title: 'Software Engineer',
    description:
      'As a student, this AI website simplifies complex topics for me, making studying a breeze.',
  },
  {
    name: 'Venky',
    avatar: 'A',
    title: 'Software Engineer',
    description:
      "Our business thrived thanks to this AI website's insights and digital marketing prowess.",
  },
  {
    name: 'Sunny',
    avatar: 'A',
    title: 'Software Engineer',
    description:
      'This AI website has transformed my online experience, providing personalized content effortlessly.',
  },
];

const LandingContent = (props: Props) => {
  return (
    <div className=" px-10 pb-20">
      <h2 className="text-center text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.name} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-sm text-zinc-400">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0 text-zinc-100">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LandingContent;
