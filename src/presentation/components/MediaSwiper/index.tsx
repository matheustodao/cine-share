import { useRouter } from 'next/navigation';

import { CaretRight } from '@phosphor-icons/react';
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
  const router = useRouter();

  function handleRedirect() {
    router.push(link);
  }

  if (loading) {
    return <MediaSwiperLoader />;
  }

  if (media?.length === 0) {
    return null;
  }

  return (
    <Container>
      <header>
        <button type="button" onClick={handleRedirect} tabIndex={0}>
          <Title as="small" schema={500} weight="medium">
            {title}
            <CaretRight size={24} />
          </Title>
        </button>
      </header>

      <MediaSwiperList>
        {media?.map((item) => (
          <SwiperSlide key={item.id}>
            <CineCard
              id={item.id}
              image={item.poster_path}
              title={item.title}
            />
          </SwiperSlide>
        ))}
      </MediaSwiperList>
    </Container>
  );
}
