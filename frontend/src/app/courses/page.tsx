'use client';

import { Container, Title, Text, Stack, Image, Skeleton } from '@mantine/core';
import { useEffect, useState } from 'react';

interface ImageItem {
  id: number;
  title: string;
  image: string;
  uploaded_at: string;
}

export default function CoursesPage() {
  const [image, setImage] = useState<ImageItem | null>(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/images/')
      .then((res) => res.json())
      .then((data: ImageItem[]) => {
        if (data.length > 0) setImage(data[0]);
      })
      .catch(console.error);
  }, []);

  return (
    <Container size="md" mt="xl">
      <Stack gap="md">
        <Title order={2}>Курсы</Title>
        <Text size="lg" c="dimmed">
          Добро пожаловать на страницу курсов. Здесь будут размещены все доступные образовательные материалы.
        </Text>

        {image ? (
          <Image
            w={300}
            src={image.image}
            alt={image.title}
            radius="md"
          />
        ) : (
          <Skeleton height={200} radius="md" />
        )}
      </Stack>
    </Container>
  );
}
