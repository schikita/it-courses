import { Button, ButtonProps } from '@mantine/core';
import { ReactNode } from 'react';

interface TelegramButtonProps extends ButtonProps {
  children: ReactNode;
}

export default function TelegramButton({ children, ...props }: TelegramButtonProps) {
  return (
    <Button variant="default" color="blue" {...props}>
      {children}
    </Button>
  );
}
