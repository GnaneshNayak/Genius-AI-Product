import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div>
      LandingPage (unProtected)
      <div>
        <Link href={'/sign-up'}>
          <Button>Register</Button>
        </Link>
        <Link href={'/sign-in'}>
          <Button>Login</Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
