'use client';

import React, { useEffect, useState } from 'react';
import { Card, CardContent } from './ui/card';
import { MAX_FREE_COUNT } from '@/constants';
import { Progress } from '@/components/ui/progress';
import { Button } from './ui/button';
import { Zap } from 'lucide-react';
import { usePROmodal } from '@/hooks/use-pro-modal';

type Props = {
  apiLimitCount: number;
  isPro: Boolean;
};

const FreeCounter = ({ apiLimitCount = 0, isPro = false }: Props) => {
  const [isMounted, setIsMounted] = useState(false);
  const proModal = usePROmodal();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  if (isPro) return null;

  return (
    <div className="px-3">
      <Card className="bg-white/10 border-0">
        <CardContent className="py-6">
          <div className="text-center text-sm text-white mb-4 space-y-2">
            <p>
              {apiLimitCount}/{MAX_FREE_COUNT} Free Generation
            </p>
            <Progress
              className="h-3"
              value={(apiLimitCount / MAX_FREE_COUNT) * 100}
            />
          </div>
          <Button
            className="w-full"
            variant="premium"
            onClick={proModal.onOpen}
          >
            Upgrade <Zap className="w-4 h-4 ml-2 fill-white" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default FreeCounter;
