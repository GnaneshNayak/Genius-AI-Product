'use client';

import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { usePROmodal } from '@/hooks/use-pro-modal';
import { Badge } from './ui/badge';
import {
  ArrowRight,
  Check,
  Code,
  Image,
  ImageIcon,
  MessageSquare,
  Music,
  VideoIcon,
  Zap,
} from 'lucide-react';
import { Card } from './ui/card';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import axios from 'axios';

type Props = {};

const tools = [
  {
    label: 'Conversation',
    icon: MessageSquare,
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10',
  },
  {
    label: 'Music Generation',
    icon: Music,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10',
  },
  {
    label: 'Video Generation',
    icon: VideoIcon,
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
  },
  {
    label: 'Code Generation',
    icon: Code,
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    href: '/code',
  },
];

const ProModal = (props: Props) => {
  const proModal = usePROmodal();
  const [loading, setLoading] = useState(false);

  const onSubscribe = async () => {
    try {
      setLoading(true);
      const res = await axios.get('api/stripe');
      window.location.href = (await res).data.url;
    } catch (error) {
      console.log(error, 'Stripe client error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
            <div className="flex items-center gap-x-2 font-bold py-1">
              Upgrade to Genius
              <Badge variant="premium" className="uppercase text-sm py-1">
                pro
              </Badge>
            </div>
          </DialogTitle>
          <DialogDescription className="text-center pt-2 space-y-2 font-medium text-zinc-900">
            {tools.map((tool) => (
              <Card
                key={tool.label}
                className="border-black/5 flex justify-between items-center pr-1"
              >
                <div className="flex items-center gap-x-4">
                  <div className={cn('p-2 w-fit rounded-md', tool.bgColor)}>
                    <tool.icon className={cn(' w-6 h-6', tool.color)} />
                  </div>
                  <div className=" font-semibold text-sm">{tool.label}</div>
                </div>
                <Check className="text-primary w-5 h-5" />
              </Card>
            ))}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            disabled={loading}
            className="w-full"
            size={'lg'}
            variant="premium"
            onClick={onSubscribe}
          >
            Upgrade <Zap className="w-4 h-4 ml-2 fill-white" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProModal;
