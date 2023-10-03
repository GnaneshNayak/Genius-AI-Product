import React from 'react';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import { UserButton } from '@clerk/nextjs';
import MobileSidebar from './mobileSidebar';
import { getApiLimitCount } from '@/lib/api-limit';
import { checkSubscription } from '@/lib/subscription';

type Props = {};

const Navbar = async (props: Props) => {
  const isPro = await checkSubscription();
  const apiLimitCount = await getApiLimitCount();
  return (
    <div className="flex items-center p-4">
      <MobileSidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
