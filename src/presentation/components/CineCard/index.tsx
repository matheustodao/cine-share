'use client';

import { Popcorn } from '@phosphor-icons/react';
import Image from 'next/image';
import Link from 'next/link';

import { CineCardProps } from 'types/presentation/cine';
import { Container, Content, WrapperImage } from './styles';

export function CineCard({ id, title, image }: CineCardProps) {
  return (
    <Container tabIndex={-1} role="group">
      <Content>
        <button type="button" tabIndex={-1}>
          <Popcorn size={24} alt="Pipoca" />
        </button>

        <Link href={`/cine/${id}`} role="navigation">
          <WrapperImage>
            <Image
              src={image}
              alt={`${title} banner`}
              fill
            />
          </WrapperImage>
        </Link>
      </Content>
    </Container>
  );
}
