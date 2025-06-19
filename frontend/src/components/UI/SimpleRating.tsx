// src/components/UI/SimpleRating.tsx
import { Flex } from '@mantine/core';
import { IconStar } from '@tabler/icons-react';

interface SimpleRatingProps {
  value: number;
  readOnly?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function SimpleRating({ value, readOnly = false, size = 'sm' }: SimpleRatingProps) {
  const iconSize = size === 'sm' ? 14 : size === 'md' ? 16 : 18;

  return (
    <Flex gap={2}>
      {[1, 2, 3, 4, 5].map((star) => (
        <IconStar
          key={star}
          size={iconSize}
          style={{
            fill: star <= value ? '#ffd43b' : 'transparent',
            color: star <= value ? '#ffd43b' : '#ced4da'
          }}
        />
      ))}
    </Flex>
  );
}