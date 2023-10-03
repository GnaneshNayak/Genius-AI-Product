'use client';

import React, { useEffect } from 'react';
import { Crisp } from 'crisp-sdk-web';

type Props = {};

const CrispChat = (props: Props) => {
  useEffect(() => {
    Crisp.configure('f7d8df0e-fe50-4726-af21-5dabb0a982f5');
  }, []);
  return <div>CrispChat</div>;
};

export default CrispChat;
