'use client';

import { Popcorn } from '@phosphor-icons/react';
import Image from 'next/image';
import Link from 'next/link';

import { useCineCardHandler } from 'presentation/handler/components/Cine/Card';
import { tmdbConfigs } from 'server/config/tmdb';
import { CineCardProps } from 'types/presentation/cine';
import { SetMediaCollectionModal } from '../Collection/SetMedia';
import { Container, Content, WrapperImage } from './styles';

export function CineCard({
  id, title, image, original_language, type, cardSize,
}: CineCardProps) {
  const {
    addMediaCollectionModal,
    handleCloseAddMediaCollectionModal,
    handleOpenAddMediaCollectionModal,
  } = useCineCardHandler();

  return (
    <Container tabIndex={-1} role="group">
      <SetMediaCollectionModal
        visible={addMediaCollectionModal}
        onClose={() => handleCloseAddMediaCollectionModal()}
        media={{
          original_language,
          poster_path: image,
          tmdb_id: id,
          type,
          title,
        }}
      />

      <Content>
        <button
          type="button"
          tabIndex={0}
          onClick={handleOpenAddMediaCollectionModal}
        >
          <Popcorn size={24} alt="Pipoca" />
        </button>

        <Link href={`/cine/${id}`} role="navigation" title={`${title}`}>
          <WrapperImage size={cardSize}>
            <Image
              src={`${tmdbConfigs.imageUri}/w220_and_h330_face/${image}`}
              alt={`${title} banner`}
              fill
              sizes="(max-width: 2848px) 220px"
            />
          </WrapperImage>
        </Link>
      </Content>
    </Container>
  );
}
