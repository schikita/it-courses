// components/common/ReusableHeaderButton.tsx
'use client';

import { Button } from '@mantine/core';
import Link from 'next/link';

interface ReusableHeaderButtonProps {
  href: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export function ReusableHeaderButton({
  href,
  onClick,
  children,
}: ReusableHeaderButtonProps) {
  return (
    <Button
      variant="outline"
      component={Link}
      href={href}
      onClick={onClick}
      className="header-button"
      style={{
        borderColor: '#667eea',
        color: '#667eea',
        borderRadius: '0.75rem',
      }}
    >
      {children}
    </Button>
  );
}
