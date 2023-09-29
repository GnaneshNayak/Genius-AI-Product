import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export const Botavatra = () => {
  return (
    <Avatar className="h-8 w-8">
      <AvatarImage className="p-1 fill" src="/logo.png" />
    </Avatar>
  );
};
