'use client';

import { Menu } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import Sidebar from './Sidebar';

type Props = {
  apiLimitCount: number;
};

const MobileSidebar = ({ apiLimitCount }: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="md:hidden" variant={'ghost'} size={'icon'}>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar apiLimitCount={apiLimitCount} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
