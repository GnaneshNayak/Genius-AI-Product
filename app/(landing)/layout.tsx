import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const LandingLayout = ({ children }: Props) => {
  return (
    <>
      <main className="bg-[#111827] h-full overflow-auto ">
        <div className="mx-auto max-w-screen-xl h-full w-full">{children}</div>
      </main>
    </>
  );
};

export default LandingLayout;
