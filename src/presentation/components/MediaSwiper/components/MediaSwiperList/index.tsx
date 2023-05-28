import { Navigation } from 'swiper';
import { Swiper } from 'swiper/react';
import { MediaSwiperListProps } from 'types/presentation/mediaSwiper';
import { Content } from './styles';

export function MediaSwiperList({ children }: MediaSwiperListProps) {
  return (
    <Content>
      <Swiper
        slidesPerView="auto"
        spaceBetween={30}
        navigation
        modules={[Navigation]}
      >
        {children}
      </Swiper>
    </Content>
  );
}
