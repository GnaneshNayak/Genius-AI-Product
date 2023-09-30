import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/navbar';
import { getApiLimitCount } from '@/lib/api-limit';
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const DashboardLayout = async ({ children }: Props) => {
  const apiLimitCount = await getApiLimitCount();
  return (
    <div className=" h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0  bg-gray-900">
        <Sidebar apiLimitCount={apiLimitCount} />
      </div>
      <main className="md:pl-72">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
