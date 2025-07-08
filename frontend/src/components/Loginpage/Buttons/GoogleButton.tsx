import { Button, ButtonProps } from '@mantine/core';
import { ReactNode } from 'react';

interface GoogleButtonProps extends ButtonProps {
  children: ReactNode;
}

export default function GoogleButton({ children, ...props }: GoogleButtonProps) {
  return (
    <Button variant="default" color="blue" {...props}>
      {children}
    </Button>
  );
}
