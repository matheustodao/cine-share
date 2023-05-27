import { CaretRight } from '@phosphor-icons/react';
import Link from 'next/link';
import { SwiperSlide } from 'swiper/react';

import { CineCard } from 'presentation/components/CineCard';
import { Title } from 'presentation/components/Typography/Title';

import { MediaSwiperProps } from 'types/presentation/mediaSwiper';

import { MediaSwiperLoader } from './components/Loader';
import { MediaSwiperList } from './components/MediaSwiperList';
import { Container } from './styles';

export function MediaSwiper({
  title, link, media, loading,
}: MediaSwiperProps) {
  if (loading) {
    return <MediaSwiperLoader />;
  }

  if (media.length === 0) {
    return null;
  }

  return (
    <Container>
      <header>
        <Link href={link}>
          <Title as="small" schema={600} weight="medium">
            {title}
            <CaretRight size={24} />
          </Title>
        </Link>
      </header>

      <MediaSwiperList>
        {media.map((item) => (
          <SwiperSlide key={item.id}>
            <CineCard {...item} />
          </SwiperSlide>
        ))}
      </MediaSwiperList>
    </Container>
  );
}
