import { CaretRight } from '@phosphor-icons/react';
import Link from 'next/link';
import { Mousewheel, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { CineCard } from 'presentation/components/CineCard';
import { Title } from 'presentation/components/Typography/Title';

import { MediaSwiperProps } from 'types/presentation/mediaSwiper';

import { Container, Content } from './styles';

export function MediaSwiper({
  title, link, media,
}: MediaSwiperProps) {
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

      <Content>
        <Swiper
          slidesPerView="auto"
          spaceBetween={30}
          navigation
          mousewheel
          modules={[Navigation, Mousewheel]}
        >
          {media.map((item) => (
            <SwiperSlide key={item.id}>
              <CineCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Content>
    </Container>
  );
}
